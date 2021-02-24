import React from 'react';
import Task from './Task';

export default {
  component: Task, // 해당 컴포넌트
  title: 'Task', //  Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법,
  // excludeStories: [], // Storybook에서 스토리를 내보낼 때 렌더링에서 제외하는 것
  // argTypes: [], // 각각의 스토리에서 인수(args)의 행동 방식을 명시합니다.
};

const Template = args => <Task { ...args } />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0)
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
};


