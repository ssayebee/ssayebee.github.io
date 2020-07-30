---
layout  : wiki
title   : 메모리의 구조
summary : 
date    : 2020-07-21 16:50:54 +0900
updated : 2020-07-21 17:26:37 +0900
tags    : 
toc     : true
public  : true
parent  : 
latex   : false
---

# 메모리의 구조

CPU와 주기억장치(RAM) 장치 사이에는 캐쉬메모리가 존재하고,
캐쉬메모리는 자주 사용되는 것은 캐쉬에 남겨두고 사용하면서 효율성을 높인다.

## 순차접근 vs 임의 접근

### 1. 순차접근: 마그네틱 테이프
결과를 얻기 위해 모든 목록을 순회하며 접근해야함.

### 2. 임의접근: RAM
메모리 주소를 알고있는 경우 즉시 접근이 가능하다.

RAM은 임의 접근이 가능하게 만들어진 구조이기 때문에, Data Bus와 Address Bus가 분리되어 있다.

## System Bus

* Control Bus: CPU에게 Data를 보낼지 받을지를 set, enable을 통해서 결정한다.
* Addess Bus: CPU에게 줄 데이터의 주소, 혹은 CPU에게 받은 데이터를 저장할 주소의 정보를 주고 받는다.
* Data Bus: 해당 Address에 메모리에 데이터를 주고 받을떄 사용된다.

메모리를 프로그래머가 직접 다루는 경우, 하드웨어 제어시 유리하고, 속도의 이점을 가질 수 있다.