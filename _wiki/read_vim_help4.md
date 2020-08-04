---
layout  : wiki
title   : 하루 20줄 vim help 번역하기 (4편)
summary : vim에서 pattern을 이용한 검색
date    : 2020-08-04 15:44:51 +0900
updated : 2020-08-04 16:50:28 +0900
tags    : [vim]
---

## Pattern 검색

| 명령    | 횟수 | 예제                      | 설명                                                      |
|---------|------|---------------------------|-----------------------------------------------------------|
| /       | N    | /{pattern}[/[offset]]<CR> | 아래로 N번째 있는 패턴을 찾는다.                          |
| ?       | N    | ?{pattern}[?[offset]]<CR> | 위로 N번째 있는 패턴을 찾는다.                            |
| /<CR>   | N    | /<CR>                     | 마지막 검색을 아래 방향으로 찾는다.                       |
| ?<CR>   | N    | ?<CR>                     | 마지막 검색을 위 방향으로 찾는다.                         |
| n       | N    | n                         | 검색을 반복 한다.                                         |
| N       | N    | N                         | 반대 방향으로 검색을 반복한다.                            |
| star    | N    | *                         | 커서가 위치한 식별자를 아래 방향으로 찾는다.              |
| #       | N    | #                         | 커서가 위치한 식별자를 위 방향으로 찾는다.                |
| gstar   | N    | g*                        | `*`와 유사하지만, 부분적으로 일치하는 단어도 찾는다.      |
| g#      | N    | g#                        | `#`과 유사하지만, 부분적으로 일치하는 단어도 찾는다.      |
| gd      |      | gd                        | 커서가 위치한 식별자(지역 변수)가 선언된 위치로 이동한다. |
| gD      |      | gD                        | 커서가 위치한 식별자(전역 변수)가 선언된 위치로 이동한다. |



## pattern: 검색 pattern의 특수 기호

| 의미                                        | 특수 기호 | 일반 기호로 사용 |
|---------------------------------------------|-----------|------------------|
| 아무 단일 문자 하나를 매치                  | `.`       | `\.`             |
| 라인의 시작을 매치                          | `^`       | `^`              |
| 마지막을 매치                               | `$`       | `$`              |
| 시작하는 단어를 매치                        | `\<`      | `\<`             |
| 끝나는 단어를 매치                          | `\>`      | `\>`             |
| 해당하는 범위의 문자를 하나 매치            | `[a-z]`   | `\[a-z]`         |
| 해당하는 범위에 문자를 제외한 문자하나 매치 | `[^a-z]`  | `\[^a-z]`        |
| 하나의 문자를 매치하는 식별자(영문, 숫자)   | `\i`      | `\i`             |
| 동일하지만, 숫자를 제외                     | `\I`      | `\I`             |
| 하나의 키워드 문자를 매치(영, 한, 숫자)     | `\k`      | `\k`             |
| 동일 하지만 숫자를 제외                     | `\K`      | `\K`             |
| 파일 이름 문자들을 매치                     | `\f`      | `\f`             |
| 동일 하지만 숫자를 제외                     | `\F`      | `\F`             |
| 출력 할 수 있는 문자만 매치                 | `\p`      | `\p`             |
| 동일 하지만 숫자를 제외                     | `\P`      | `\P`             |
| 공백 문자를 매치                            | `\s`      | `\s`             |
| 공백 문자가 아닌 문자 매치                  | `\S`      | `\S`             |
| matches <Esc>                               | `\e`      | `\e`             |
| matches <Tab>                               | `\t`      | `\t`             |
| matches <CR>                                | `\r`      | `\r`             |
| matches <BS>                                | `\b`      | `\b`             |
| 앞에 패턴과 0개 이상 일치하는 패턴 매치     | `*`       | `\*`             |
| 앞에 패턴과 1개 이상 일치하는 패턴 매치     | `\+`      | `\+`             |
| 앞에 패턴과 0 또는 1개 일치하는 패턴 매치   | `\=`      | `\=`             |
| 앞에 패턴과 N 또는 M개 일치하는 패턴 매치   | `\{2,5}`  | `\{2,5}`         |
| 패턴을 분리해서 매칭                        | `\|`      | `\|`             |
| 패턴들을 그루핑                             | `\(\)`    | `\(\)`           |