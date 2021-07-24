# 문자열

## [11654] 아스키코드

문자의 아스키코드 값을 출력한다. String.charCodeAt() 기능을 활용했다. 이 기능은 UTF-16 코드(0~65535 범위의 정수값)를 리턴한다. 첫 128 유니코드(0 ~ 127)는 아스키코드 값과 일치한다.

## [11720] 숫자의 합

여러개의 수로 이뤄진 문자열을 입력받아 합을 출력하는 문제. 문자열을 숫자 배열로 변환하여 reduce 함수로 합을 구했다.

## [10809] 알파벳 찾기

입력값으로 주어진 단어에서 알파벳이 첫번째로 나온 인덱스 값을 반영한 문자열로 출력한다. -1로 초기화 한 배열에 값을 기록하고 포매팅하여 출력했다.

## [2675] 문자열 반복

입력값을 받아 입력된 반복횟수만큼 각문자를 반복하는 출력값을 만들기. 반복문을 중첩해서 원하는 출력문을 가공했다.

## [1157] 단어 공부

주어진 단어에서 case insensitive 하게 가장 많이 사용된 알파벳을 알아내기. 알파벳 맵을 만들어 횟수를 기록하고 가장 큰 값의 키를 반환하는 방법을 택했다.

## [1152] 단어의 개수

입력된 문장에서 단어의 개수를 세서 출력한다. 입력값을 trim처리해서 공백으로 split처리 한다음 길이를 잰다. 로직은 간단했는데 입력값에 장난질을 쳤는지 빈문자열을 한번 더 정제해줘야 했다.

## [2908] 상수

숫자의 순서를 반전한 다음 두 개의 숫자 중 큰 수를 출력한다. 숫자를 문자열로 변환해서 배열로 만들어 반전한 다음 다시 문자열로 만들어 숫자로 변환했다. 그 후 큰 수만 비교하면 끝.

## [5622] 다이얼

구식 다이얼 전화에서 단어를 입력하기 위한 시간을 출력. 먼저 입력값의 단어를 번호로 변환하고 번호를 입력하는데 걸리는 시간을 구한다.

## [2941] 크로아티아 알파벳

주어진 입력값에 몇개의 크로아티아 알파벳이 있는지 센다. 정규식이 익숙하지 않아 애를 먹었다.

## [1316] 그룹 단어 체커

그룹 단어가 무슨 의미인지 알기 어려웠다. 문자열을 순회하면서 새로 발견된 문자를 배열에 넣는다. 기존 문자라면 인덱스 값을 확인해보고 꼬리 인덱스가 아니라면 그룹 단어가 아니다.