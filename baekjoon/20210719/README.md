# 1차원 배열

## [10818] 최소, 최대

주어진 숫자 중 가장 큰 수와 가장 작은 수를 구하는 문제. 입력 값을 배열로 가공해서 정렬해서 풀었다.

## [2562] 최대값

역시 배열로 가공 후 정렬해서 풀었다.

## [2577] 숫자의 개수

카운트를 집계할 배열을 초기화해두고 배열로 가공해서 처리.

## [3052] 나머지

입력값으로 10개의 자연수가 주어지고 42로 나눈 나머지가 몇가지 수인지 출력하는 문제. 첫번째 구현은 배열로 반복해서 연산을 처리하고 결과값은 set으로 만들어 중복 제거를 한뒤 size를 출력했다. 입력값이 잘못된 걸 알 수 없어 한참 애를 먹다가 trim() 처리하라는 블로그 글을 보고야 통과할 수 있었다.

## [1546] 평균 조작

시험 점수를 조작하는 수식대로 진행했다. 마지막에 구현한 포맷 기능은 여기저기 써먹을 수 있을 것 같다. 표현하고 싶은 자릿수까지 먼저 정수로 변환한다음 반올림처리하고 다시 소숫점 처리 해주면 어지간한 숫자 계산은 괜찮을 듯 하다.

## [8958] OX 퀴즈

연속된 O를 골라낸 다음 점수를 계산했다. 백준의 입력값 정제 문제 때문에 한참을 소모했다. trim()을 잊지말고 해줘야겠다.

## [4344] 평균은 넘겠지

역시 입력값을 정제해서 각 케이스 별로 처리했다. 특별한 건 없었음.