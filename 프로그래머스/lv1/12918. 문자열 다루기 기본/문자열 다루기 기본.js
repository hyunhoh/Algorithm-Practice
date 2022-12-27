function solution(s) {
    // return (s.length === 4 || s.length === 6) && !Number.isNaN(Number(s)) ? true : false;
    // 위와 같이 작성하면 테스트 11번에서 걸리게된다.
    // 그래서 이유를 살펴보니 16진수 형태의 문자열이 입력될 경우, Number()가 10진수로 변환해서 리턴한다.
    // 예를들어, '0x33'이 입력될 경우 Number('0x33')은 51을 리턴한다. 그럼 true를 리턴하게된다.
    // 따라서 for문을 이용해서 문자열의 문자 하나하나에 접근해서 확인해줘야한다.
    
    if(s.length !== 4 && s.length !== 6) return false;
    
    for(ele of s) {
        if(Number.isNaN(Number(ele))) return false;
    }
    
    return true;
}