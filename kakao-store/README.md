

## 페이지별 구성

| 번호 | 페이지 이름 | 핵심기능  | 기능 상세 설명 | 인터페이스 요구사항 |
| --- | --- | --- | --- | --- |
| 1 | 로그인 | 로그인 요청 및 사용자 로그인 정보 저장 | 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다. | 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다. |
| 1-1 | 로그아웃 | 로그아웃 및 서비스 종료 | 버튼 클릭 시 로그인 이전 상태로 변경 | 로그아웃 버튼 클릭 |
| 1-2 | 회원가입 | 서비스 이용을 위한 회원 가입 | 카카오 계정 서비스 약관 → 번호 인증 → 이메일, 비밀번호 유효성 검사 | 이메일, 비밀번호, 비밀번호 확인 후 회원가입 버튼 클릭 |
| 2 | 메인 | 전체적인 기능을 사용자의 화면 안에 모두 보여줌 | 전체 상품 조회 및 화면 출력 | 전체 상품 출력 |
| 3 | 상품 검색 결과 | 원하는 상품을 검색하여 결과에 만족하는 상품들을 모두 출력 | 검색창에 키워드 입력 후 해당하는 상품을 가져와서 출력 | 입력칸에 원하는 키워드 입력 |
| 4 | 개별 상품 상세 | 특정 상품 선택 시, 해당 상품에 대한 정보 출력 | 전체 상품 혹은 검색하여 상품을 검색 → 해당 상품에 대한 상세 정보와 옵션을 가져와 출력 | 상품 목록에서 특정 상품 클릭 |
| 5 | 주문 목록 | 상품 옵션 선택 | 상품 옵션 선택 → 이미 선택한 옵션은 선택 불가 | 옵션 리스트에서 옵션 클릭 |
| 5-1 | 수량 결정 | 선택한 옵션의 주문 수량 결정 | 선택한 옵션의 매수 증감(최소 1) 및 삭제 | 옵션별 +- 버튼으로 수량 변경 |
| 6 | 장바구니 | 장바구니에 담긴 상품을 확인 | 장바구니에 다긴 상품의 내용(상품명, 수량, 할인여부) 확인 | 개별 상품 페이지에서 장바구니 버튼을 클릭하여 담기 / 페이지 상단에서 장바구니 버튼을 클릭하여 이동 |
| 7 | 주문하기 | 결제 전 배송지 및 결제 수단 확인 | 배송지 정보, 결제수단, 현금영수증 여부 등 동의 및 확인 후 결제 진행 가능 | 주문하기 버튼 클릭 |
| 8 | 결제 | 상품을 주문한 것으로 처리 | 선택한 결제 수단으로 결제 진행 | 결제하기 버튼 클릭 |
| 9 | 마이페이지 | 사용자의 주문 정보 및 진행중인 주문내역 확인 | 사용자의 등급, 현재 진행중인 주문이나 찜한 상품 및 스토어 취소/교환/반품 조회 등 리스트 출력 | 프로필 클릭 후 MY쇼핑 클릭 |

### 로그인
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/71b687c5-8dc4-42ab-a1a4-ebe118864a4e" width="300" height="300"/>

---

### 메인

<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/35d5c414-5431-4551-8daf-333b19a4cb88" width="400" height="300"/>

---

### 상품 검색 결과
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/349ff61b-ebbd-49b8-88e2-34860f3f6d02" width="400" height="300"/>

---

### 개별 상품 상세
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/6d41e195-94af-4558-86bb-2d65c827ef1b" width="400" height="300"/>

---

### 주문 목록
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/9616662d-8c17-4978-927e-9f4970148b24" width="200" height="400"/>

---

### 장바구니
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/6670676a-a2c6-4c50-9f25-9b7e8f79fe7e" width="400" height="300"/>


---

### 주문하기

<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/dd1f305a-a451-42e6-9c71-ff1f550062ca" width="400" height="300"/>

---

### 결제
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/5575ea51-08cc-463c-9a53-9df21b68b97a" width="300" height="300"/>

---

### 마이페이지
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/7534373e-933a-40d8-b74f-2dbf81b39057" width="300" height="300"/>

---

## 디렉토리 구조

```python
└─ public : 정적 파일들이 포함되는 폴더
└─ src
 ├─ components : 재사용 가능한 컴포넌트들이 위치하는 폴더
 ├─ assets : 이미지 혹은 폰트와 같은 파일들이 저장되는 폴더
 ├─ hooks (= hoc) : 커스텀 훅이 위치하는 폴더
 ├─ pages : 라우팅을 적용할 페이지 컴포넌트들이 위치하는 폴더
 ├─ styles : css 파일들이 포함되는 폴더
 ├─ services (= api) api관련 로직의 모듈 파일, auth와 같이 인증과 관련된 파일
 ├─ utils 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더
 ├─ App.js
 └─ index.js
```

