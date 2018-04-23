describe('Bubble Sort', function(){

beforeEach(function () {
  spyOn(window, 'swapFn').and.callThrough(); // replace existing `tootsiepop['lick']` method
  spyOn(window, 'compareFn').and.callThrough();
  spyOn(window, 'bubbleSort').and.callThrough()

});


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swapFn.calls.count()).toEqual(0)
    expect(window.compareFn.calls.count()).toEqual(0)
  });

  it('handles an array of size 1', function(){
    expect( bubbleSort([1]) ).toEqual([1]);
    expect(window.swapFn.calls.count()).toEqual(0)
    expect(window.compareFn.calls.count()).toEqual(0)
  });

  it('handles an unsorted array of elements', function(){
    expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
    expect(window.swapFn.calls.count()).toEqual(10)
    expect(window.compareFn.calls.count()).toEqual(10)
  });

  it('handles a sorted array', function(){
    expect( bubbleSort([1,2,3,4,5]) ).toEqual([1,2,3,4,5]);
    expect(window.swapFn.calls.count()).toEqual(0)
    expect(window.compareFn.calls.count()).toEqual(4)
  });

  it('sorts itself recursively', function(){
    const someArr= [5,42,234,7]
    bubbleSort(someArr)
    expect(window.bubbleSort.calls.count()).toBeGreaterThan(1)
  });



});
