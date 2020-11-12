## 요구 사항

본 프로젝트를 진행하려면, 최신인 stable한 버전의 `node`가 설치되어 있어야 합니다.

## 작업 순서

모든 작업은 해당 저장소의 [project 탭](https://github.com/orgs/DSC-Sahmyook/projects/2)과 [이슈 탭](https://github.com/DSC-Sahmyook/Sejul-client/issues)에 공유될 예정 입니다.
업무가 등록되면, 이슈 탭에도 등록될 예정이니 각 작업을 확인해보고 진척정도를 알려주시면 됩니다.

## 개발 명령어

-   `yarn run start` : 개발 서버를 실행합니다
-   `yarn run build` : 현재 상태 내용을 빌드합니다.

## 공통 개발 컨벤션 요약

-   컴포넌트, 변수의 이름은 되도록 카멜케이스를 따르도록 합니다.
-   모든 화면은 반복적으로 사용되는 `component`와 각 페이지를 의미하는 `view`로 나뉩니다.
-   prettier를 사용합니다. 저장시 자동으로 정렬되도록 설정해둡니다. (vs code의 "editor.formatOnSave" 항목을 true로 설정)
-   [react code snippet](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) 확장 툴을 사용하고, 기본 뼈대는 `rafce`를 기준으로 합니다.
-   master 브랜치에는 업로드하지 않고, 기능 개발시 브랜치를 만들어 pull request를 작성하도록 합니다
-   커밋 메시지는 되도록 첫줄은 이슈 넘버와 간단하게 작성 후 줄 바꿈하여 상세한 내용을 작성하도록 합니다.

## 1. 개발 준비

본 프로젝트는 [API 서버](https://github.com/DSC-Sahmyook/Sejul-api) 프로젝트와 연동하여 작업합니다. 그러므로, 프론트엔드 작업자들은 로컬 환경에 해당 프로젝트를 반드시 클론해 실행할 수 있도록 설정해 두어야 합니다. 해당 서버의 실행 과정은 저장소의 `readme`에서 확인할 수 있습니다.

그 후 `.env.development`와 `.env.production`파일이 필요합니다. 해당 파일들은 본 프로젝트의 `readme.md`파일과 같은 경로에 위치해야합니다. 해당 파일은 직접 요청하시면 보내드립니다. 그 후 개발 환경은 아래와 같은 순서로 준비합니다.

-   API 서버의 가상환경 실행 : `. ./myenv/scripts/activate`
-   API 서버 실행 : `python manage.py runserver`
-   클라이언트 서버 실행 : `yarn start`

## 2. 작업 과정 및 GIT 정책

각 작업자가 맡은 페이지는 [issues](https://github.com/DSC-Sahmyook/Sejul-client/issues)에서 확인할 수 있습니다. 담당자로 본인이 설정되어 있는 내용을 작업하면 됩니다. 이 때, 브랜치를 나누어 작업합니다. 우리의 브랜치 정책은 다음과 같습니다.

### 2.1. 브랜치 정책

1. `master` 브랜치에는 작업하지 않는다
2. 각 기능의 개발 결과물 중간마다 `dev`에 모인다
3. 기본적으로 각 기능을 개발시에는 `features/#이슈번호`의 브랜치를 만들어서 작업한다
4. 기능 별 브랜치의 작업이 완료된 후에는 `dev`로 `pull request`를 작성한다.

우리의 작업 내용에서 `master` 브랜치는 반드시 오류가 없는 완성본들만 모아둘 예정입니다. 그렇기 때문에, `master` 브랜치에는 직접 작업하지 않도록 합니다. 이때, 깃의 작업에서 어려움을 겪는 분들과 깃에 익숙한 분들의 작업 내용이 조금 다르니 참고해주세요.

#### 2.1.1. 깃에 익숙한 작업자의 경우

깃에 익숙한 작업자들은 다음과 같은 순서로 작업을 진행합니다.

1. 본인 작업의 이슈 번호를 가진 `features` 브랜치를 만듭니다
2. 모든 작업을 해당 브랜치에서 진행합니다
3. 작업이 완료될 때마다 원격지에 해당 브랜치로 `push`합니다
4. 작업이 어느정도 완료되어 테스트가 필요할 경우, `dev` 브랜치로 `merge`를 위한 `pull request`를 생성합니다

1번의 경우 브랜치 이름은 `features/#이슈번호`입니다. 이 이슈번호는 이슈 탭에서 본인이 할당된 이슈의 번호를 적어넣으면 됩니다. 브랜치의 이름이 겹치지 않기위해서 위와 같은 방법으로 작성하기로 했습니다. 그 후, 모든 작업은 해당 브랜치에서만 진행합니다. 테스트가 필요하거나 기능 개발이 완료된 경우 `dev`브랜치로 합치기 위해 `pull request`를 생성하면 담당자인 유경수(@YOOGOMJA)가 직접 머지하게 됩니다.

#### 2.1.2. 깃에 익숙하지 않는 작업자의 경우

브랜치의 사용법이 익숙하지 않거나, 브랜치를 만드는 과정이 어려워 따라가기 힘들다면 `dev` 브랜치를 기준으로 작업해주세요. 해당 브랜치를 이용하는 방법은 `git checkout dev`라는 명령어로 수행할 수 있습니다. 다만, `master` 브랜치 만큼은 수정하지 않도록 유의해주세요. 충돌 처리 또한 VSCode에서 직접 보며 업데이트 내용이 소실되지 않도록 신경써주시기 바랍니다.

### 2.2. 커밋 메시지

작업자분들의 대부분은 본인 영역의 브랜치에서 작업하겠지만, 커밋 메시지에도 이슈번호를 반드시 붙여주세요. (예시 : `git commit -m "화면 배치 완료 #8"`)이렇게 작성할 경우, 이슈 목록에서 해당 커밋들을 추적할 수 있습니다. 진행사항을 체크하기 위해 반드시 이슈번호를 붙여주세요.

그리고 이슈 메시지는 되도록 첫줄에는 간략하게 내용을 축약해서 작성해주시고, 줄바꿈 후 상세한 내용을 작성해주세요. 줄바꿈은 VSCode내에서 커밋 메시지를 작성하는 경우 쉽게 할 수 있습니다.

## 3. 컴포넌트 및 작업 영역

각 작업자들은 페이지에서 공통되는 UI 요소들을 확인해주세요. 주로 포스트의 박스 형태, 카드 형태의 UI 등이 반복되는 요소들입니다. 해당 요소들은 이미 `components`폴더에 제작되어 있습니다. 이미 제작된 내용 이외에도 다른 페이지에 반복되는 사항이 있다면, 담당자(@YOOGOMJA) 혹은 @blair06에게 알려주시면 작업 후 배포될 것 입니다. 별도로 컴포넌트 작업을 수행할 수 있다면, 본인이 직접 작업하셔도 됩니다.

공통적으로 사용되는 요소들 이외에 모든 항목들은 본인 기능의 이름을 가진 폴더 안에서만 작업하면 됩니다. 보통 `views`폴더 안에 있습니다. `scss`파일을 필요로 한다면, 해당 작업 폴더 내에 `scss`폴더를 만든 후 그 안에 포함시켜주세요. 그리고 `views`의 각 폴더 안에는, `index.jsx` 파일이 있습니다. 그 파일은 해당 폴더 작업물을 `Router` 측에서 가져오는 일종의 메인 파일처럼 사용됩니다. 그렇기 때문에 각 페이지 작업자는 최종 결과물을 `index.jsx`에 모아주시면 됩니다. 그 외에 해당 페이지에서 필요한 **반복될 필요없는** 컴포넌트들은 폴더안에 `PascalCase` 형식의 이름으로 만들어서 작업해주시면 됩니다.

## 4. 프로젝트 구조

### 4.1. api 폴더

api 통신부 내용들만 포함됩니다. 기능 단위로 파일을 만들게되며, 파일의 이름은 `기능명.api.js`로 만들게 됩니다. 각 api는 작성된 후
해당 폴더에 `index.js`에 등록되어야 하고, 기능명과 동일한 이름으로 추가해줍니다. 이때 이름의 첫 문자는 대문자이어야 합니다. API를 불러와 사용하는 예제는 다음과 같습니다.

```jsx
import { QnaAPI } from '../../api';
import React, { useEffect } from 'react'

const Component = ()=>{
    const fn = async ()=>{
        const result = await QnaAPI.getQNAs();
        console.log(result);
    }
    useEffect(()=>{
        fn();
    },[]);
    return <div><div>;
}
```

### 4.2. components 폴더

한 페이지 이상 자주 반복되거나, 대다수의 `route`에서 반복적으로 노출되는 요소들을 모아둡니다. 컴포넌트 이름의 폴더를 만든 후 `index.ts`에
등록합니다.

컴포넌트를 만들고 , `props`가 필요하다면 `prop-types`를 참조해 `proptypes`를 미리 선언해둡니다.

### 4.3. lib 폴더

모든 `component` 혹은 `view`에서 데이터를 다루거나 할 때 필요한 공통 함수들을 모아둡니다. 대다수 작업자들은 불러와 사용하도록 합니다.

### 4.4. scss 폴더

현재 `scss`파일들은 모두 `view` 폴더 혹은 `component` 폴더 안에서 각각 가지고 작업하게 되어있으나 모든 페이지에 적용되어야 하거나 모든 컴포넌트에서 사용할 수 있는 `mixin` 혹은 `전역 변수`로 사용되는 항목들은 이 폴더에 모아둡니다.

### 4.5. views 폴더

주소에 매칭되는 실제 페이지들을 모아둡니다. 각 폴더의 이름은 카멜케이스로 작성되며, 각 폴더에는 페이지 파일을 모두 작성해둔 `index.jsx` 파일을 가져야 합니다. 그리고 각 페이지에서 복잡한 항목을 포함하게 되어 컴포넌트로 분리하게 될 경우 카멜케이스로 `tsx`파일을 만들어 불러와 사용하도록 합니다.

