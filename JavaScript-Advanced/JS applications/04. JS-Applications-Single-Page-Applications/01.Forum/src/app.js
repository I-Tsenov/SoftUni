import { getTopicData, createTopicSection, showComments } from './data.js';

const mainViewSection = document.getElementById('mainView');
const postBtn = document.querySelector('#mainView button.public');
const cancelBtn = document.querySelector('#mainView button.cancel')
const newTopicForm = mainViewSection.querySelector('form');
const postCommentsSection = document.getElementById('postCommentsSection');
const topicsContainer = document.getElementById('topicsContainer');
const homeBtn = document.querySelector('header nav a');

function attachEvents() {
  newTopicForm.addEventListener('submit', (ev) => ev.preventDefault());

  cancelBtn.addEventListener('click', (ev) => {
    const form = ev.target.parentNode.parentNode;
    form.reset()
  })

  homeBtn.addEventListener('click', () => {
    mainViewSection.style.display = '';
    postCommentsSection.style.display = 'none';
  });

  topicsContainer.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (ev.target.tagName == 'H2') {
      const id = ev.target.dataset.id;
      showComments(id);
    }
  });

  postBtn.addEventListener('click', async (ev) => {
    const data = getTopicData(ev);
    const newData = await postTopic(data);
    createTopicSection(newData);
    newTopicForm.reset();
  });
}

attachEvents()

postCommentsSection.style.display = 'none';

const allTopics = await getTopics();

if (Object.values(allTopics).length > 0) {
  Object.values(allTopics).forEach((e) => createTopicSection(e));
}

async function getTopics() {
  const res = await fetch(
    'http://localhost:3030/jsonstore/collections/myboard/posts'
  );

  if (res.ok !== true) {
    const response = await res.json();
    throw new Error(response.message);
  }

  return await res.json();
}

async function postTopic(data) {
  const res = await fetch(
    ' http://localhost:3030/jsonstore/collections/myboard/posts',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (res.ok !== true) {
    const response = await res.json();
    throw new Error(response.message);
  }

  return await res.json();
}