import React from 'react';
import {render} from 'react-dom';

import Task from './lib/tasks/01-hello-world/demo';
// import Task from './lib/task/02-hello-world-with-props/demo';
// import Task from './lib/task/03-using-special-prop-children/demo';
// import Task from './lib/task/04-using-more-children/demo';
// import Task from './lib/task/05-events-alert-on-click/demo';
// import Task from './lib/task/06-hello-state/demo';
// import Task from './lib/task/07-initialize-state-with-props/demo';
// import Task from './lib/task/08-conditional-rendering/demo';

render(
    <Task/>,
    document.getElementById('root'),
);
