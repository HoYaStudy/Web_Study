# Script Tag

## Head에 포함

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

1. HTML 구문 분석
2. 필요한 JS 파일 fetching and executing.
3. 나머지 HTML 구문 분석

## Body에 포함

```html
<body>
  ...
  <script src="main.js"></script>
</body>
```

1. HTML 구문 분석
2. 필요한 JS 파일 fetching and executing.

## Async 사용

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

1. HTML 구문 분석
2. 필요한 JS 파일 병렬로 fetching
3. JS 파일 executing
4. 나머지 HTML 구문 분석

## Defer 사용

```html
<head>
  ...
  <script defer src="main.js"></script>
  ...
</head>
```

1. HTML 구문 분석
2. 필요한 JS 파일 병렬로 fetching
3. JS 파일 executing
