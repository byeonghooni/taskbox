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

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitleString = Template.bind({});
LongTitleString.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  }
};
