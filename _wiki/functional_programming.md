---
layout  : wiki
title   : JS 함수형 프로그래밍
summary : 
date    : 2020-07-08 12:37:29 +0900
updated : 2020-07-31 15:37:07 +0900
tags    : [js, fp]
toc     : true
public  : true
parent  : 
latex   : false
---

# JS 함수형 프로그래밍

함수형 프로그래밍은 성공적인 프로그래밍을 위해 부수 효과를 미워하고 조합성을 강조하는 프로그래밍 패러다임이다.

* 부수 효과를 미워한다. -> 순수 함수를 만든다.
* 조합성을 강조한다. -> 모듈화 수준을 높인다.
* 순수 함수 -> 오류를 줄이고 안정성을 높인다.
* 모듈화 수준이 높다. -> 생산성을 높인다.

## 요즘 개발 이야기

| 분류                          | 예시                                  |
|-------------------------------|---------------------------------------|
| 독창성/ 완성도                | 애니메이션, 무한 스크롤, 벽돌         |
| 더 많아져야하는 동시성        | 비동기 I/O, CSP, Actor, STM           |
| 더 빨라야하는 반응성/고가용성 | ELB, Auto Scaling, OTP Superviosor    |
| 대용량/ 정확성 / 병렬성       | MapReduce, Clojure Reducers           |
| 복잡도 / MSA                  | 많아지고 세밀해지는 도구들            |
| 재미/ 실시간성                | 라이브 방송, 실시간 댓글 협업, 메신저 |

* 좋아지는 하드웨어 성능
* 좋아지는 컴파일러
* 함수형 컴파일러
* 함수형 프로그래밍 기술
* 좋아지는 분산 / 리액티브 환경
* 동시성 + 병렬성 관련 기술
* 성공적인 적용 사례와 영향

"함수형 프로그래밍은 애플리케이션, 함수의 구성요소, 더 나아가서 언어 자체를 함수처럼 여기도록 만들고, 이러한 함수 개념을 가장 우선순위에 놓는다."
"함수형 사고방식은 문제 해결 방법을 동(함수)들로 구성(조합)하는 것"

마이클 포거스 [클로저 프로그래밍의 즐거움]에서

```
/* 데이터(객체) 기준 */
duck.moverLeft();
duck.moverRight();
dog.moverLeft();
dog.moveRight();
```

```
/* 함수 기준 */
moveLeft(dog);
moveRight(duck);
moveLeft({ x: 5, y: 2});
moveRight(dog);
```

---

## 다형성

### 1. _echo로 _map, _filter 중복 제거
`_.js`파일 참고

### 2. 외부 다형성

1. array_like, arguments, document.querySelectorAll


```javascript
console.log(document.querySelectorAll('*'));
```
js의 list는 내장함수 map, filter를 지원하지만 nodeList(유사 리스트)는 map, filter 함수를 사용할 수 없다.
하지만 순수함수 _map, _filter를 직접 만든다면 사용이 가능하다.

```js
console.log(
  _map(
    document.querySelectorAll('*'),
    node => node.nodeName )
);
```

순수 함수로 만드는 기법기 기존의 메서드 형태보다 다형성, 실용성 측면에서 좋은 점들을 가지고 있다.

### 3. 내부 다형성

1. predi, iter, mapper

### 4. 함수형 프로그래밍에서 오류 처리

함수형 프로그래밍은 오류 데이터가 들어와도 그럴듯하게 처리하므로써 다형성을 극대화 시킨다.

```javascript
var _get = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key]
});

var _length = _get('length');

function _each(list, iter) {
  var keys = _keys(list)
  for(var i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]]);
  }
  return list;
};

function _is_obj(obj) {
  return typeof obj == 'object' && !!obj;
}

function _keys(obj) {
  return _is_obj(obj) ? Object.keys(obj) : [];
}
_each(null, console.log);
```

_each 함수에 null 처리, obj의 value도 처리 할 수 있게 함으로써 다형성을 극대화 할 수 있다.

### 5. 컬렉션 중심 프로그래밍의 4가지 유형과 함수

1. 수집하기 - map, values, pluck 등
2. 거르기 - filter, reject, compact, without 등
3. 찾아내기 - find, some, every 등
4. 접기 - reduce, min, max, group_by, count_by
