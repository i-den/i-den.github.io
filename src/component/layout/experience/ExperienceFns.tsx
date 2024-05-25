import javaLogo from "../../../assets/icons/java.svg";
import springLogo from "../../../assets/icons/spring.svg";
import reactorLogo from "../../../assets/icons/reactor.svg";
import vavrLogo from "../../../assets/icons/vavr.svg";
import junitLogo from "../../../assets/icons/junit.svg";
import mockitoLogo from "../../../assets/icons/mockito.svg";
import testContainersLogo from "../../../assets/icons/testcontainers.svg";
import wireMockLogo from "../../../assets/icons/wiremock.svg";
import jsLogo from "../../../assets/icons/javascript.svg";
import tsLogo from "../../../assets/icons/typescript.svg";
import reactLogo from "../../../assets/icons/react.svg";
import awsLogo from "../../../assets/icons/aws.svg";
import sqsLogo from "../../../assets/icons/sqs.svg";
import s3Logo from "../../../assets/icons/s3.svg";
import dockerLogo from "../../../assets/icons/docker.svg";
import localStackLogo from "../../../assets/icons/localstack.svg";
import postgreLogo from "../../../assets/icons/postgre.svg";
import mongoLogo from "../../../assets/icons/mongo.svg";
import intellijLogo from "../../../assets/icons/intellij.svg";
import vscodeLogo from "../../../assets/icons/vscode.svg";
import postmanLogo from "../../../assets/icons/postman.svg";
import githubLogo from "../../../assets/icons/github.svg";
import linuxLogo from "../../../assets/icons/linux.svg";
import jiraLogo from "../../../assets/icons/jira.svg";
import adobeLogo from "../../../assets/icons/adobe.svg";

export type ExperienceCtx = {
  name: string;
  src: string;
  alt: string;
  title: string;
  isListed: boolean;
  isHovered: boolean;
};

export function initExperienceCtx(): ExperienceCtx[] {
  return [
    { name: "Java", src: javaLogo, alt: "Java", title: "Java (8, 11, 17)", isListed: false, isHovered: false },
    {
      name: "Spring",
      src: springLogo,
      alt: "Spring",
      title: "Spring (Boot, Data, Security)",
      isListed: false,
      isHovered: false,
    },
    { name: "Reactor", src: reactorLogo, alt: "Reactor", title: "Reactor", isListed: false, isHovered: false },
    { name: "Vavr", src: vavrLogo, alt: "Vavr", title: "Vavr", isListed: false, isHovered: false },
    { name: "JUnit", src: junitLogo, alt: "JUnit", title: "JUnit", isListed: false, isHovered: false },
    { name: "Mockito", src: mockitoLogo, alt: "Mockito", title: "Mockito", isListed: false, isHovered: false },
    {
      name: "TContainers",
      src: testContainersLogo,
      alt: "TestContainers",
      title: "TestContainers",
      isListed: false,
      isHovered: false,
    },
    { name: "WireMock", src: wireMockLogo, alt: "WireMock", title: "WireMock", isListed: false, isHovered: false },
    { name: "JavaScript", src: jsLogo, alt: "JavaScript", title: "JavaScript", isListed: false, isHovered: false },
    { name: "TypeScript", src: tsLogo, alt: "TypeScript", title: "TypeScript", isListed: false, isHovered: false },
    { name: "React", src: reactLogo, alt: "React", title: "React", isListed: false, isHovered: false },
    { name: "AWS", src: awsLogo, alt: "AWS", title: "AWS", isListed: false, isHovered: false },
    { name: "SQS", src: sqsLogo, alt: "SQS", title: "SQS", isListed: false, isHovered: false },
    { name: "S3", src: s3Logo, alt: "S3", title: "S3", isListed: false, isHovered: false },
    { name: "Docker", src: dockerLogo, alt: "Docker", title: "Docker", isListed: false, isHovered: false },
    {
      name: "LocalStack",
      src: localStackLogo,
      alt: "LocalStack",
      title: "LocalStack",
      isListed: false,
      isHovered: false,
    },
    { name: "Postgre", src: postgreLogo, alt: "Postgre", title: "Postgre", isListed: false, isHovered: false },
    { name: "Mongo", src: mongoLogo, alt: "Mongo", title: "Mongo", isListed: false, isHovered: false },
    { name: "IntelliJ", src: intellijLogo, alt: "IntelliJ", title: "IntelliJ", isListed: false, isHovered: false },
    { name: "VS Code", src: vscodeLogo, alt: "VS Code", title: "VS Code", isListed: false, isHovered: false },
    { name: "Postman", src: postmanLogo, alt: "Postman", title: "Postman", isListed: false, isHovered: false },
    { name: "Github", src: githubLogo, alt: "GitHub", title: "GitHub", isListed: false, isHovered: false },
    { name: "Linux", src: linuxLogo, alt: "Linux", title: "Linux", isListed: false, isHovered: false },
    { name: "Jira", src: jiraLogo, alt: "Jira", title: "Jira", isListed: false, isHovered: false },
    { name: "Adobe", src: adobeLogo, alt: "Adobe", title: "Adobe", isListed: false, isHovered: false },
  ];
}
