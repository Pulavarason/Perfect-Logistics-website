import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// Diagnostic endpoint to test Supabase connection
export async function GET() {
  try {
    console.log('=== SUPABASE DIAGNOSTIC TEST ===');
    
    // Test 1: Check environment variables
    console.log('✓ Step 1: Checking environment variables...');
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    console.log('  NEXT_PUBLIC_SUPABASE_URL exists:', hasUrl);
    console.log('  NEXT_PUBLIC_SUPABASE_ANON_KEY exists:', hasAnonKey);
    
    if (!hasUrl || !hasAnonKey) {
      return NextResponse.json({
        status: 'FAILED',
        error: 'Missing environment variables',
        details: {
          hasUrl,
          hasAnonKey,
        },
      }, { status: 500 });
    }

    // Test 2: Try a simple query
    console.log('✓ Step 2: Attempting Supabase connection...');
    
    const { data, error, status } = await supabase
      .from('reviews')
      .select('count', { count: 'exact', head: true })
      .eq('approved', true);

    if (error) {
      console.error('❌ Supabase error:', error);
      return NextResponse.json({
        status: 'FAILED',
        error: error.message,
        details: error,
      }, { status: 500 });
    }

    console.log('✓ Step 3: Successfully connected to Supabase!');
    console.log('  Status:', status);
    console.log('  Data count:', data?.length || 0);

    // Test 3: Fetch actual reviews
    console.log('✓ Step 4: Fetching reviews...');
    const { data: reviews, error: fetchError } = await supabase
      .from('reviews')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .limit(5);

    if (fetchError) {
      console.error('❌ Error fetching reviews:', fetchError);
      return NextResponse.json({
        status: 'PARTIAL',
        message: 'Connected to Supabase but failed to fetch reviews',
        error: fetchError.message,
      }, { status: 500 });
    }

    console.log('✓ SUCCESS: All tests passed!');
    console.log('  Reviews found:', reviews?.length || 0);

    return NextResponse.json({
      status: 'SUCCESS',
      message: 'Supabase connection is working!',
      reviewsCount: reviews?.length || 0,
      sampleReviews: reviews?.slice(0, 2) || [],
      timestamp: new Date().toISOString(),
    }, { status: 200 });

  } catch (err: any) {
    console.error('❌ DIAGNOSTIC TEST FAILED:', err);
    return NextResponse.json({
      status: 'FAILED',
      error: err.message,
      errorType: err.constructor.name,
      details: {
        message: err.message,
        stack: err.stack?.split('\n').slice(0, 5),
      },
    }, { status: 500 });
  }
}