# NPM (Node Package Manager)

## Initialization

Create a `package.json` file.

> $ npm init

Generate `package.json` file without having it ask any questions.

> $ npm init -y

### Description

* `"name"`: Project name
  + Should be less than 214 characters
  + Don't start with '.' or '_'
  + Don't use the upper case character
* `"version"`: Project version
* `"description"`: Project description
* `"main"`: Entry point
* `"scripts"`: Project commands
* `"author"`: Project author
* `"dependencies"`: Project dependent packages
* `"devDependencies"`: Project dependent packages for developing only
* `"keywords"`: Project keywords
  + Used for searching
* `"homepage"`: Project homepage
  + Not a URL
* `"bugs"`: Project issue and bug tracking
  + `"url"`: URL for an issue or bug tracking
  + `"email"`: Email for an issue or bug tracking
* `"license"`: Project license

## Run Script

> $ npm run-script \<command>

Aliased as `run`, `rum`, `urn`.

`package.json`안에 `scripts`에 명시된 command를 실행한다.
`start`같은 일부 command는 `run-script`를 생략할 수 있다.

## Package Installation

> $ npm install [--save-dev | -g] [package]

Aliased as `i`, `isntall`, `add`.

`npm install`만 입력하면 `package.json`안에 `dependencies`에 명시된 module을 설치한다.

`--save-dev` option을 넣으면 개발 전용으로 추가한다.

* Python이 필요하다.
* Windows Build Tools가 필요하다.
  > $ npm install windows-build-tools

## Show Installed Package List

> $ npm ls [-g]

Aliased as `list`, `la`, `ll`.
