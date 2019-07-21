---
title: "[Spring Reference] Spring Framework Overview (v5.1.8 RELEASE)"
date: "2019-07-20T23:15"
description: "Spring Framework 개요."
---

이번 포스팅을 통해 Spring Framework에 대해 확실히 정리를 하려고 합니다. 

아웃사이더님이 오래전에 올리신 포스팅을 최근에 보았습니다. 스프링 레퍼런스로 공부하면서 영문 레퍼런스를 번역하신 글이었는데, 포스팅을 읽고 저도 레퍼런스로 공부를 해봐야겠다는 계획을 세웠습니다. 앞으로 레퍼런스를 읽으며 꾸준히 번역을 해보려 합니다. 물론 제 개인공부를 위한 취지이기에 번역의 상태가 좋지 못할 수 있습니다.

이번 포스팅에서는 [spring.io](https://docs.spring.io/spring/docs/current/spring-framework-reference/overview.html#overview)에 게시된 Spring Framework 개요를 👣번역 해보려고 합니다.

---

## \# 스프링 프레임워크 개요 (Spring Framework Overview)
Version 5.1.8 RELEASE

> Spring은 자바 엔터프라이즈 애플리케이션 개발을 쉽게 만들어준다. Spring은 Groovy 및 Kotlin을 JVM에서 대체 언어로 지원하고, 에플리케이션의 요구사항에 따른 다양한 종류의 아키텍처 구현을 위한 유연성을 제공하여 엔터프라이즈 환경에서 자바 언어를 포용하는 데 필요한 모든 것을 제공한다. Spring Framework 5.1에서 Spring은 JDK 8+ (Java SE 8+)가 필요하며 JDK 11 LTS에 대해 즉시 사용할 수 있는 지원을 제공한다.
>
> Spring은 넓은 범위의 애플리케이션 시나리오를 제공한다. 규모가 큰 기업에서 애플리케이션은 오랫동안 지속되는 경우가 많으며, 개발자가 제어 할 수 없는 업그레이드 주기를 가진 JDK 및 애플리케이션 서버에서 실행해야 한다.
>
> 다른 점은 Cloud 환경에서도 가능하도록, `서버를 내장한 단일 jar 파일로 실행이 된다는 점이다.` 그러나 다른 서버는 서버가 필요없는 독립 실행형 애플리케이션(batch, 통합 workloads 등)일 수 있다.
>
> `Spring은 오픈소스이다.` Spring은 크고 활발한 커뮤니티가 있고, 다양한 범위의 실제 사용 사례를 기반으로 지속적인 피드백을 제공한다. 이러한 점은 Spring이 오랜 시간동안 성공적으로 발달하는 데 큰 도움이 되었다.


### \# 1. 스프링의 의미 (What we mean by 'Spring')
> 'Spring'이라는 용어는 어떤 맥락에서는 다른 것을 의미한다. `Spring은 Spring Framework 프로젝트 자체를 가리키는 데 사용될 수 있다.` 시간이 지나면서 다른 Spring 프로젝트가 Spring Framework 위에 구현되었다. 사람들이 'Spring'이라 부르는 것은 대부분 프로젝트의 entire family를 의미한다. 레퍼런스 문서는 Spring Framework 자체의 토대에 초점이 맞춰져 있다.
>
> `Spring Framework는 여러 개의 모듈로 나눠진다.` 애플리케이션들은 필요에 따라 모듈을 선택할 수 있다. 이 중심에는 configuration model과 dependency injection과 같은 코어 컨테이너 모듈이 있다. 그것을 넘어서 Spring Framework는 messaging, transactional data 그리고 persistence, web과 같은 다른 애플리케이션 아키텍처를 위한 기초적인 지원을 제공한다. 또한 Servlet 기반의 Spring MVC Web framework와 WebFlux reactive web framework를 병행한다.
>
> 모듈에 대한 참고사항: Spring framework jar는 JDK 9의 모듈 경로('Jigsaw')에 배포할 수 있다. Jigsaw-enabled를 애플리케이션에서 사용하기 위해 Spring Framework 5 jar에는 jar artifact 이름(jar는 '.' 대신 '-' 명명 패턴을 따른다. 예를 들어 'spring-core', 'spring-context')과는 별개로 안정된 언어 수준 모듈 이름('spring.core', 'spring.context' etc)을 정의하는 'Automatic-Module-Name' 매니페스트 항목이 있습니다. 물론, Spring의 framework jar는 JDK 8과 9+ 모두 classpath에서 잘 작동한다.

### \# 2. 스프링과 스프링 프레임워크의 역사 (History of Spring and the Spring Framework)
> Spring은 `2003년`에 초기 J2EE의 복잡함에 대한 해결책으로 등장하였다. 일부는 Java EE와 Spring을 경쟁 대상으로 간주하지만, 실제로 Spring은 Java EE를 보완한다. Spring 프로그래밍 모델은 Java EE 플랫폼 사양을 포함하지 않는다. 오히려 Spring은 EE umbrella로부터 엄선된 개별 스펙과 통합된다.
> 
>- Servlet API ([JSR 340](https://jcp.org/en/jsr/detail?id=340))
>- WebSocket API ([JSR 356](https://www.jcp.org/en/jsr/detail?id=356))
>- Concurrency Utilities ([JSR 236](https://www.jcp.org/en/jsr/detail?id=236))
>- JSON Binding API([JSR 367](https://jcp.org/en/jsr/detail?id=367))
>- Bean Validation ([JSR 303](https://jcp.org/en/jsr/detail?id=303))
>- JPA ([JSR 338](https://jcp.org/en/jsr/detail?id=338))
>- JMS ([JSR 914](https://jcp.org/en/jsr/detail?id=914))
>- 필요한 경우 트랜잭션 조정을 위한 JTA/JCA 설정을 제공한다.
>
> Spring Framework는 또한 애플리케이션 개발자들이 Spring Framework에서 제공되는 Spring-스펙 메커니즘 대신에 선택할지도 모르는 `Dependency Injection`(의존성 주입. [JSR 330](https://www.jcp.org/en/jsr/detail?id=330))과 `common annotation`([JSR 250](https://jcp.org/en/jsr/detail?id=250)) 스펙을 지원한다.
>
> Spring Framework 5.0부터, Spring은 최소한 Java EE 7(예를 들면 Servlet 3.1+, JPA 2.1+) 레벨이 필요하다. 동시에 런타입시 Java EE 8 레벨(예를 들면 Servlet 4.0, JSON Binding API)에서 신규 API와의 즉각적인 통합을 제공한다. 이로써 Spring은 Tomcat 8 & 9, WebSphere 9, JBoss EAP 7과 완벽하게 호환이 된다. 
>
> 시간이 지남에따라 애플리케이션 개발에서 Java EE의 역할이 진화해왔다. Java EE와 Spring 초창기에, 애플리케이션들은 애플리케이션 서버에 배포되도록 개발되어졌다. 오늘날에는 Spring Boot의 도움으로, `Servlet container`를 내장하고 변경하는 것이 간단해지면서 애플리케이션들은 devops 및 cloud 친화적인 방법으로 개발되어진다. Spring Framework 5부터, WebFlux 애플리케이션 조차도 Servlet API를 직접 사용하지 않고, Servlet container가 아닌 서버(Netty와 같은)를 띄울 수 있다.
>
> Spring은 혁신과 발달을 계속한다. Spring Framework를 넘어 Spring Boot, Spring Security, Spring Data, Spring Cloud, Spring Batch..와 같은 다른 프로젝트들이 있다. 각 프로젝트마다 고유한 소스 코드 저장소, 이슈 트래커, 배포 cadence가 있다는 것을 기억하는 것은 중요하다. Spring 프로젝트의 전체 목록은 [spring.io/projects](https://spring.io/projects)를 참조해라.

### \# 3. 디자인 철학 (Design Philosophy)
> 당신이 framework에 대해 배울 때, 그것이 무엇을 하는지뿐만 아니라 `어떤 원리가 따르는지`를 아는 것이 중요하다. Spring Framework의 기본 원칙은 다음과 같다.
>
>- 매 단계별로 선택권을 제공해라. Spring은 가능한 한 design 결정을 늦게 결정하도록 한다. 예를 들어, 당신은 persistence providers(영속성 제공자)를 코드 수정 없이 설정만으로 변경할 수 있다. 다른 많은 인프라 문제와 써드 파티 API와의 통합에서도 마찬가지이다.
>- 다양한 관점을 수용해라. Spring은 `유연함`을 포용하고, 어떻게 해야만 하는지를 강제하지 않는다. Spring은 다른 관점에 있는 넓은 범위의 애플리케이션 요구를 지원한다.
>- 강력한 `이전 버전과의 호환성` 유지. Spring의 발전은 버전간에 몇 가지 중요한 변경사항을 강제하기 위해 신중하게 관리되었다. Spring은 Spring에 의존하는 애플리케이션과 라이브러리의 유지를 가능하게 하기 위해, 신중하게 선택된 JDK 버전의 범위와 써드파티 라이브러리들을 지원한다. 
>- `API 디자인`에 대한 관심. Spring 팀은 직관적이며 많은 버전과 여러 해에 걸친 API를 만드는 데 많은 시간과 노력을 기울이고 있습니다.
>- 코드 품질에 대한 높은 기준을 설정해라. Spring Framework는 의미있고, 최신의 정확한 javadoc를 강조한다. `Spring Framework는 패키지간에 순환 의존성이 없는 깨끗한 코드 구조를 주장할 수 있는 몇 안 되는 프로젝트 중 하나이다.`

### \# 4. 피드백 및 기여 (Feedback and Contributions)
> 사용법에 대한 질문이나 진단 또는 디버깅 문제는 StackOverflow를 사용하는 것을 추천한다. 그리고 우리는 사용할 제안 태그가 나열된 질문 페이지가 있다. Spring Framework에 문제가 있거나 feature(기능)을 제안하고 싶으면 GitHub Issues를 사용해라.
>
> 해결책이나 제안받은 해결책이 있으면 pull request를 제출할 수 있다. 그러나 신중히 해야한다. 다는 아니지만 대부분은 사소한 이슈들이다. 우리는 토론을 하고 미래의 reference를 위해 기록을 남기고 이슈 트래커에 ticket을 남길 것을 기대한다.
>
> 더 많은 세부정보들은 최상위 프로젝트 페이지인 [CONTRIBUTING](https://github.com/spring-projects/spring-framework/blob/master/CONTRIBUTING.md)에 있는 가이드라인을 참고해라. 


### \# 5. 시작하기 (Getting Started)

> Spring을 처음 사용하는 경우, Spring Boot 기반  애플리케이션을 생성하여 Spring Framework를 사용할 수 있다. Spring Boot는 production-ready Spring 기반의 애플리케이션을 만드는 빠른(그리고 독창적인) 방법을 제공한다. Spring Framework를 기반으로 하며, 컨벤션(관습)보다 규칙을 선호한다. 그리고 Spring Boot는 가능한 빨리 애플리케이션을 가동하고 실행할 수 있도록 디자인 되었다.
>
> 당신은 [starts.spring.io]를 사용하여 기초 프로젝트를 생성하거나 [Getting Started Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)와 같은 ["Getting Started" guides](https://spring.io/guides)중 하나를 팔로우 할 수도 있다. 소화하기 쉬울뿐만 아니라, 이 가이드는 task에 중점을 두고 있으며 대부분이 Spring Boot를 기반으로 한다. 가이드는 또한 특정 문제를 해결할 때 고려해야 할 Spring portfolio의 다른 프로젝트들도 포함한다.

---

Version 5.1.8.RELEASE

Last updated 2019-06-13 13:44:59 UTC

---

### \# Reference.

- [Spring Reference](https://docs.spring.io/spring/docs/current/spring-framework-reference/overview.html#overview)

```
Copyright © 2002 - 2019 Pivotal, Inc. All Rights Reserved.

이 문서는 개인적인 목적이나 다른 사람에게 배포하기 위한 목적으로 복사할 수 있다. 
복사본에 Copyright 기재가 되어 있으면 출력, 온라인 배포 시에 어떠한 비용도 청구되지 않는다. 
```