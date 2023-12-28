let original = {
    a: 1,
    b: { c: 2 }
  };
  
  let shallowCopy = { ...original };
  
  shallowCopy.a = 3; // 기본 타입 필드 수정
  shallowCopy.b.c = 4; // 내부 객체 필드 수정
  
  console.log(original); // { a: 1, b: { c: 4 } }
  console.log(shallowCopy); // { a: 3, b: { c: 4 } }