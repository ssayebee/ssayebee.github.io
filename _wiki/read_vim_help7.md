---
layout  : wiki
title   : 하루 20줄 vim help 번역하기 (7편)
summary : 스크롤 이동, 텍스트 삽입
date    : 2020-08-15 15:13:42 +0900
updated : 2020-08-15 16:03:37 +0900
tags    : [vim]
comments: true
---


## 1. Scrolling


| 명령   | 횟수 | 용법        | 설명                                            |
|--------|------|-------------|-------------------------------------------------|
| CTRL-E | N    | CTRL-E      | 창을 N라인 밑으로 내린다. (default: 1)          |
| CTRL-D | N    | CTRL-D      | 창을 N라인 밑으로 내린다. (default: 1/2 window) |
| CTRL-F | N    | CTRL-F      | 창을 N페이지 밑으로 내린다. (downwards)         |
| CTRL-Y | N    | CTRL-Y      | 창을 N라인 위로 올린다. (default: 1)            |
| CTRL-U | N    | CTRL-U      | 창을 N라인 위로 올린다. (default: 1/2 window)   |
| CTRL-B | N    | CTRL-B      | 창을 N페이지 위로 올린다. (upwards)             |
| z<CR>  |      | z<CR> or zt | 현재 라인이 창 제일 위에 위치하게 다시 그린다.  |
| z.     |      | z.	 or zz  | 현재 라인이 창 가운데 오게 다시 그린다.         |
| z-     |      | z-	 or zb  | 현재 라인이 창 제일 밑에 위치하게 다시 그린다.  |

### 아래는 `set nowrap`이 설정 되어 있을때, 적용된다.

| 명령 | 횟수 | 용법 | 설명                                                    |
|------|------|------|---------------------------------------------------------|
| zh   | N    | zh   | N문자 만큼 수평 스크롤을 오른쪽으로 움직인다.           |
| zl   | N    | zl   | N문자 만큼 수평 스크롤을 왼쪽 움직인다.                 |
| zH   | N    | zH   | 스크롤의 너비의 절반 만큼 스크롤을 오른쪽으로 움직인다. |
| zL   | N    | zL   | 스크롤의 너비의 절반 만큼 스크롤을 오른쪽으로 움직인다. |


------------------------------------------------------------------------------

## 2. Inserting text

| 명령          | 횟수 | 용법               | 설명                                                                       |
|---------------|------|--------------------|----------------------------------------------------------------------------|
| a             | N    | a                  | 현재 커서 뒤에 N번 텍스트를 추가 한다.                                     |
| A             | N    | A                  | 라인의 끝에 N번 텍스트를 추가 한다.                                        |
| i             | N    | i                  | 현재 커서 앞에 문자를 추가한다. (N times) (also: <Insert>)                 |
| I             | N    | I                  | 라인의 첫번째 non-blank 문자 뒤에 텍스트를 추가한다. (N times)             |
| gI            | N    | gI                 | 첫번째 행에 문자를 삽입한다. (N times)                                     |
| o             | N    | o                  | 현재 라인의 아랫 줄 새줄을 추가하고 입력 모드로 전환 (N times)             |
| O             | N    | O                  | 현재 라인의 윗 줄에 새줄을 추가하고 입력 모드로 전환 (N times)             |
| :startinsert  |      | :star[tinsert][!]  | start Insert mode, append when [!] used                                    |
| :startreplace |      | :startr[eplace][!] | start Replace mode, at EOL when [!] used                                   |

### Visual Block Mode 명령 <C-v>

| 명령  | 용법 | 설명                                    |
|-------|------|-----------------------------------------|
| v_b_I | I    | 선택된 라인의 앞에 동일한 텍스트를 입력 |
| v_b_A | A    | 선택된 라인의 뒤에 동일한 텍스트를 입력 |
