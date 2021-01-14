# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
### 테스트 완료된 사항

- 라우트 설정 - 컨트롤러 연결 (URL, 쿼리 파라미터 전달)
- 라우트 - 미들웨어 - 컨트롤러 연결
- Dockerfile + 상황별 docker-compose.yml 적용으로 빌드 다변화
- Dev 환경에서 mysql 컨테이너 생성 및 연결 (Orphan container 주의)
- adonis migration: run && adonis serve --dev
- adonis make 개발 command 테스트
```bash
adonis make: controller <name>
adonis make: middleware <name>
adonis make: migration <name>
```