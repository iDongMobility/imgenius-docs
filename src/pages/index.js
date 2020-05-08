import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>SOP（作业规范）</>,
    imageUrl: 'img/sop.png',
    description: (
      <>
        可方便地配置如何执行现场作业和他们的标准化作业规范，同时这些内容可以被非常方便地修改，使得作业的方法和规范可以根据实践而持续改进。
      </>
    ),
    link:'docs/系统配置手册/作业管理器/作业规范概述',
  },
  {
    title: <>BPM引擎</>,
    imageUrl: 'img/bpm.png',
    description: (
      <>
        配置工具为客户在他们的工作流程上提供了清晰的可视化。谁将创建任务，谁来执行任务，在什么情况下需要审核完成的任务，如何处理有例外的任务。
      </>
    ),
    link:'docs/系统配置手册/流程管理器/流程管理器',
  },
  {
    title: <>移动工作站</>,
    imageUrl: 'img/mw.png',
    description: (
      <>
        现场工作人员开始执行在移动设备上预先配置的任务步骤。工作在业务逻辑的引导下变得更加容易完成，一旦问题被发现，业务逻辑又可以帮助识别和解决。
      </>
    ),
    link:'docs/用户使用手册/终端/登录',
  },
  {
    title: <>分析和报表</>,
    imageUrl: 'img/report.png',
    description: (
      <>
        通过浏览器，用户可以查看每个任务的历史趋势和详细的运行数据。概述和异常情况报告为用户提供汇总数据。KPI图表，帮助用户完成绩效评估。
      </>
    ),
    link:'docs/用户使用手册/网页端/报表',
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>了解详情</a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`主页`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/简介/概述')}>
              开始
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
