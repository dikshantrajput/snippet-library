const arr = 
[
    {
      "title": "Debounce Function",
      "description": "Creates a debounced function that delays the processing of the input until after a specified wait time has elapsed since the last invocation.",
      "code": "function debounce(func, wait) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), wait);\n  };\n}",
      "language": "javascript",
      "category": "Function Utilities",
      "tags": ["javascript", "debounce", "performance", "timing"]
    },
    {
      "title": "Throttle Function",
      "description": "Creates a throttled function that only invokes the provided function at most once per every specified milliseconds.",
      "code": "function throttle(func, limit) {\n  let inThrottle;\n  return function(...args) {\n    if (!inThrottle) {\n      func.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}",
      "language": "javascript",
      "category": "Function Utilities",
      "tags": ["javascript", "throttle", "performance", "timing"]
    },
    {
      "title": "Deep Clone Object",
      "description": "Performs a deep clone of an object, handling nested objects and arrays.",
      "code": "function deepClone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}",
      "language": "javascript",
      "category": "Object Utilities",
      "tags": ["javascript", "clone", "object", "deep"]
    },
    {
      "title": "Group By Property",
      "description": "Groups an array of objects by a specified property.",
      "code": "function groupBy(array, property) {\n  return array.reduce((acc, obj) => {\n    const key = obj[property];\n    if (!acc[key]) acc[key] = [];\n    acc[key].push(obj);\n    return acc;\n  }, {});\n}",
      "language": "javascript",
      "category": "Array Utilities",
      "tags": ["javascript", "group", "array", "object"]
    },
    {
      "title": "Flatten Nested Arrays",
      "description": "Flattens an array of nested arrays into a single array.",
      "code": "function flattenArray(arr) {\n  return arr.reduce((flat, toFlatten) => {\n    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);\n  }, []);\n}",
      "language": "javascript",
      "category": "Array Utilities",
      "tags": ["javascript", "array", "flatten", "recursive"]
    },
    {
      "title": "Capitalize Each Word",
      "description": "Capitalizes the first letter of each word in a string.",
      "code": "function capitalizeEachWord(str) {\n  return str.replace(/\\b\\w/g, char => char.toUpperCase());\n}",
      "language": "javascript",
      "category": "String Utilities",
      "tags": ["javascript", "capitalize", "string", "text"]
    },
    {
      "title": "Retry Async Function",
      "description": "Retries an asynchronous function a specified number of times before failing.",
      "code": "async function retryAsync(fn, retries = 3) {\n  while (retries > 0) {\n    try {\n      return await fn();\n    } catch (err) {\n      if (--retries === 0) throw err;\n    }\n  }\n}",
      "language": "javascript",
      "category": "Async Utilities",
      "tags": ["javascript", "async", "retry", "error-handling"]
    },
    {
      "title": "Memoize Function",
      "description": "Creates a memoized function that caches the result of a computation for given inputs.",
      "code": "function memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}",
      "language": "javascript",
      "category": "Function Utilities",
      "tags": ["javascript", "memoize", "performance", "caching"]
    },
    {
      "title": "Random Integer in Range",
      "description": "Generates a random integer between two specified values, inclusive.",
      "code": "function getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}",
      "language": "javascript",
      "category": "Math Utilities",
      "tags": ["javascript", "random", "integer", "math"]
    },
    {
      "title": "Parse Query String",
      "description": "Parses a URL query string into an object.",
      "code": "function parseQueryString(queryString) {\n  return Object.fromEntries(new URLSearchParams(queryString));\n}",
      "language": "javascript",
      "category": "String Utilities",
      "tags": ["javascript", "url", "query", "parse"]
    },
    {
      "title": "Generate UUID",
      "description": "Generates a random UUID (version 4).",
      "code": "function generateUUID() {\n  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {\n    const r = Math.random() * 16 | 0;\n    const v = c === 'x' ? r : (r & 0x3 | 0x8);\n    return v.toString(16);\n  });\n}",
      "language": "javascript",
      "category": "String Utilities",
      "tags": ["javascript", "uuid", "generate", "unique"]
    },

    {
        "title": "Curry Function",
        "description": "A higher-order function that transforms a function with multiple arguments into a sequence of functions, each taking a single argument.",
        "code": "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    } else {\n      return function(...args2) {\n        return curried.apply(this, args.concat(args2));\n      }\n    }\n  };\n}\n\n// Usage\nconst add = curry((a, b, c) => a + b + c);\nconst result = add(1)(2)(3); // 6",
        "language": "javascript",
        "category": "Functional Programming",
        "tags": ["javascript", "functional", "higher-order-function", "currying"]
      },
      {
        "title": "Compose Functions",
        "description": "Combines multiple functions into a single function, where the result of each function is passed as an argument to the next function.",
        "code": "const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);\n\n// Usage\nconst addOne = x => x + 1;\nconst double = x => x * 2;\nconst square = x => x * x;\n\nconst compute = compose(square, double, addOne);\nconst result = compute(3); // 64",
        "language": "javascript",
        "category": "Functional Programming",
        "tags": ["javascript", "functional", "composition", "higher-order-function"]
      },
      {
        "title": "Lazy Evaluation Sequence",
        "description": "Implements a lazy sequence generator that only computes values when needed, useful for working with potentially infinite sequences.",
        "code": "function* lazySequence(start = 0, step = 1) {\n  let value = start;\n  while (true) {\n    yield value;\n    value += step;\n  }\n}\n\n// Usage\nconst evenNumbers = lazySequence(0, 2);\nconst first5EvenNumbers = [];\nfor (let i = 0; i < 5; i++) {\n  first5EvenNumbers.push(evenNumbers.next().value);\n}\nconsole.log(first5EvenNumbers); // [0, 2, 4, 6, 8]",
        "language": "javascript",
        "category": "Lazy Evaluation",
        "tags": ["javascript", "generator", "lazy-evaluation", "infinite-sequence"]
      },
      {
        "title": "Event Emitter",
        "description": "A simple implementation of the publish-subscribe pattern, allowing for event-driven programming.",
        "code": "class EventEmitter {\n  constructor() {\n    this.events = {};\n  }\n\n  on(eventName, callback) {\n    if (!this.events[eventName]) {\n      this.events[eventName] = [];\n    }\n    this.events[eventName].push(callback);\n  }\n\n  emit(eventName, ...args) {\n    const eventCallbacks = this.events[eventName];\n    if (eventCallbacks) {\n      eventCallbacks.forEach(callback => callback(...args));\n    }\n  }\n\n  off(eventName, callback) {\n    const eventCallbacks = this.events[eventName];\n    if (eventCallbacks) {\n      this.events[eventName] = eventCallbacks.filter(cb => cb !== callback);\n    }\n  }\n}\n\n// Usage\nconst emitter = new EventEmitter();\nemitter.on('userLoggedIn', user => console.log(`${user} logged in`));\nemitter.emit('userLoggedIn', 'John'); // Logs: John logged in",
        "language": "javascript",
        "category": "Design Patterns",
        "tags": ["javascript", "event-emitter", "publish-subscribe", "design-pattern"]
      },
      {
        "title": "Pipe Async Functions",
        "description": "Combines multiple asynchronous functions into a single pipeline, where the result of each function is passed to the next one.",
        "code": "const pipeAsync = (...fns) => initialValue =>\n  fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(initialValue));\n\n// Usage\nconst fetchUser = async (id) => { /* fetch user data */ };\nconst processUser = async (user) => { /* process user data */ };\nconst saveUser = async (processedUser) => { /* save processed user data */ };\n\nconst pipeline = pipeAsync(fetchUser, processUser, saveUser);\npipeline(123).then(result => console.log('User processed and saved'));\n",
        "language": "javascript",
        "category": "Asynchronous Programming",
        "tags": ["javascript", "async", "pipeline", "functional"]
      },
      {
        "title": "Observable Pattern",
        "description": "Implements the Observable pattern for reactive programming, allowing objects to watch and react to changes in other objects.",
        "code": "class Observable {\n  constructor(initialValue) {\n    this.value = initialValue;\n    this.observers = [];\n  }\n\n  subscribe(observer) {\n    this.observers.push(observer);\n    observer(this.value);\n    return () => {\n      this.observers = this.observers.filter(obs => obs !== observer);\n    };\n  }\n\n  next(newValue) {\n    this.value = newValue;\n    this.observers.forEach(observer => observer(newValue));\n  }\n}\n\n// Usage\nconst counter = new Observable(0);\nconst unsubscribe = counter.subscribe(value => console.log(`Counter: ${value}`));\ncounter.next(1); // Logs: Counter: 1\ncounter.next(2); // Logs: Counter: 2\nunsubscribe(); // Stop observing",
        "language": "javascript",
        "category": "Reactive Programming",
        "tags": ["javascript", "observable", "reactive", "design-pattern"]
      },
      {
        "title": "Decorator Pattern",
        "description": "Implements the Decorator pattern to add new behaviors to objects dynamically without altering their structure.",
        "code": "function Coffee() {\n  this.cost = function() { return 5; };\n  this.description = function() { return 'Coffee'; };\n}\n\nfunction Milk(coffee) {\n  const cost = coffee.cost();\n  const description = coffee.description();\n  coffee.cost = function() { return cost + 2; };\n  coffee.description = function() { return `${description} with Milk`; };\n  return coffee;\n}\n\nfunction Sugar(coffee) {\n  const cost = coffee.cost();\n  const description = coffee.description();\n  coffee.cost = function() { return cost + 1; };\n  coffee.description = function() { return `${description} with Sugar`; };\n  return coffee;\n}\n\n// Usage\nlet coffee = new Coffee();\ncoffee = Milk(coffee);\ncoffee = Sugar(coffee);\nconsole.log(coffee.description()); // Coffee with Milk with Sugar\nconsole.log(coffee.cost()); // 8",
        "language": "javascript",
        "category": "Design Patterns",
        "tags": ["javascript", "decorator", "design-pattern", "structural"]
      },
      {
        "title": "Proxy Object with Validation",
        "description": "Creates a proxy object that validates property assignments before applying them to the target object.",
        "code": "function createValidatedObject(initialValues, validations) {\n  return new Proxy(initialValues, {\n    set(target, property, value) {\n      if (validations.hasOwnProperty(property)) {\n        if (!validations[property](value)) {\n          throw new Error(`Invalid value for property ${property}`);\n        }\n      }\n      target[property] = value;\n      return true;\n    }\n  });\n}\n\n// Usage\nconst person = createValidatedObject(\n  { name: 'John', age: 30 },\n  {\n    name: value => typeof value === 'string' && value.length > 0,\n    age: value => typeof value === 'number' && value >= 0 && value <= 120\n  }\n);\n\nperson.name = 'Jane'; // OK\nperson.age = 25; // OK\nperson.age = -5; // Throws an error\n",
        "language": "javascript",
        "category": "Object Manipulation",
        "tags": ["javascript", "proxy", "validation", "object"]
      },
      {
        "title": "Async Queue with Concurrency Limit",
        "description": "Implements an asynchronous queue that processes tasks with a specified concurrency limit.",
        "code": "class AsyncQueue {\n  constructor(concurrency = 1) {\n    this.concurrency = concurrency;\n    this.queue = [];\n    this.running = 0;\n  }\n\n  async add(task) {\n    return new Promise((resolve, reject) => {\n      this.queue.push({ task, resolve, reject });\n      this.process();\n    });\n  }\n\n  async process() {\n    if (this.running >= this.concurrency || this.queue.length === 0) return;\n\n    this.running++;\n    const { task, resolve, reject } = this.queue.shift();\n\n    try {\n      const result = await task();\n      resolve(result);\n    } catch (error) {\n      reject(error);\n    } finally {\n      this.running--;\n      this.process();\n    }\n  }\n}\n\n// Usage\nconst queue = new AsyncQueue(2); // Process 2 tasks concurrently\nconst delay = ms => new Promise(resolve => setTimeout(resolve, ms));\n\nfor (let i = 0; i < 5; i++) {\n  queue.add(async () => {\n    console.log(`Starting task ${i}`);\n    await delay(1000);\n    console.log(`Finished task ${i}`);\n    return i;\n  });\n}\n",
        "language": "javascript",
        "category": "Asynchronous Programming",
        "tags": ["javascript", "async", "queue", "concurrency"]
      },
      {
        "title": "Simple State Machine",
        "description": "Implements a basic state machine for managing complex workflows or application states.",
        "code": "class StateMachine {\n  constructor(initialState, transitions, onTransition) {\n    this.state = initialState;\n    this.transitions = transitions;\n    this.onTransition = onTransition || (() => {});\n  }\n\n  transition(action) {\n    const nextState = this.transitions[this.state][action];\n    if (nextState) {\n      const prevState = this.state;\n      this.state = nextState;\n      this.onTransition(prevState, nextState, action);\n      return true;\n    }\n    return false;\n  }\n\n  getState() {\n    return this.state;\n  }\n}\n\n// Usage\nconst trafficLight = new StateMachine(\n  'red',\n  {\n    red: { change: 'green' },\n    green: { change: 'yellow' },\n    yellow: { change: 'red' }\n  },\n  (from, to, action) => console.log(`Light changed from ${from} to ${to}`)\n);\n\ntrafficLight.transition('change'); // Light changed from red to green\ntrafficLight.transition('change'); // Light changed from green to yellow\nconsole.log(trafficLight.getState()); // yellow",
        "language": "javascript",
        "category": "State Management",
        "tags": ["javascript", "state-machine", "workflow", "design-pattern"]
      },

      {
        "title": "Reactive State Management",
        "description": "A simple reactive state management system using Proxy and Reflect",
        "code": "function createStore(initialState) {\n  let listeners = [];\n  const state = new Proxy(initialState, {\n    set(target, property, value) {\n      const result = Reflect.set(target, property, value);\n      listeners.forEach(listener => listener(target));\n      return result;\n    }\n  });\n\n  function subscribe(listener) {\n    listeners.push(listener);\n    return () => {\n      listeners = listeners.filter(l => l !== listener);\n    };\n  }\n\n  return { state, subscribe };\n}\n\n// Usage\nconst store = createStore({ count: 0 });\nconst unsubscribe = store.subscribe(state => console.log('State updated:', state));\nstore.state.count++; // Logs: State updated: { count: 1 }\nunsubscribe();",
        "language": "javascript",
        "category": "State Management",
        "tags": ["javascript", "reactive", "state-management", "proxy"]
      },
      {
        "title": "Virtual DOM Implementation",
        "description": "A basic implementation of a virtual DOM with diffing and patching",
        "code": "function createElement(type, props, ...children) {\n  return { type, props: props || {}, children };\n}\n\nfunction render(vdom) {\n  if (typeof vdom === 'string') return document.createTextNode(vdom);\n  const element = document.createElement(vdom.type);\n  Object.entries(vdom.props).forEach(([name, value]) => element.setAttribute(name, value));\n  vdom.children.forEach(child => element.appendChild(render(child)));\n  return element;\n}\n\nfunction diff(oldVdom, newVdom) {\n  if (!oldVdom) return { type: 'CREATE', newVdom };\n  if (!newVdom) return { type: 'REMOVE' };\n  if (typeof oldVdom !== typeof newVdom || \n      (typeof oldVdom === 'string' && oldVdom !== newVdom) ||\n      oldVdom.type !== newVdom.type) {\n    return { type: 'REPLACE', newVdom };\n  }\n  if (newVdom.type) {\n    const propPatches = diffProps(oldVdom.props, newVdom.props);\n    const childPatches = diffChildren(oldVdom.children, newVdom.children);\n    return { type: 'UPDATE', propPatches, childPatches };\n  }\n  return null;\n}\n\nfunction diffProps(oldProps, newProps) {\n  const patches = [];\n  // Check for changed or new props\n  Object.entries(newProps).forEach(([name, value]) => {\n    if (oldProps[name] !== value) {\n      patches.push({ type: 'SET_PROP', name, value });\n    }\n  });\n  // Check for removed props\n  Object.keys(oldProps).forEach(name => {\n    if (!(name in newProps)) {\n      patches.push({ type: 'REMOVE_PROP', name });\n    }\n  });\n  return patches;\n}\n\nfunction diffChildren(oldChildren, newChildren) {\n  const patches = [];\n  const maxLength = Math.max(oldChildren.length, newChildren.length);\n  for (let i = 0; i < maxLength; i++) {\n    patches.push(diff(oldChildren[i], newChildren[i]));\n  }\n  return patches;\n}\n\nfunction patch(parent, patches, index = 0) {\n  if (!patches) return;\n  const element = parent.childNodes[index];\n  switch (patches.type) {\n    case 'CREATE':\n      parent.appendChild(render(patches.newVdom));\n      break;\n    case 'REMOVE':\n      parent.removeChild(element);\n      break;\n    case 'REPLACE':\n      parent.replaceChild(render(patches.newVdom), element);\n      break;\n    case 'UPDATE':\n      patchProps(element, patches.propPatches);\n      patches.childPatches.forEach((childPatch, i) => {\n        patch(element, childPatch, i);\n      });\n      break;\n  }\n}\n\nfunction patchProps(element, patches) {\n  patches.forEach(patch => {\n    if (patch.type === 'SET_PROP') {\n      element.setAttribute(patch.name, patch.value);\n    } else if (patch.type === 'REMOVE_PROP') {\n      element.removeAttribute(patch.name);\n    }\n  });\n}\n\n// Usage\nconst oldVdom = createElement('div', { id: 'container' },\n  createElement('h1', {}, 'Hello'),\n  createElement('p', {}, 'World')\n);\n\nconst newVdom = createElement('div', { id: 'container' },\n  createElement('h1', {}, 'Hello'),\n  createElement('p', {}, 'Updated World')\n);\n\nconst rootElement = render(oldVdom);\ndocument.body.appendChild(rootElement);\n\nconst patches = diff(oldVdom, newVdom);\npatch(rootElement, patches);",
        "language": "javascript",
        "category": "Virtual DOM",
        "tags": ["javascript", "virtual-dom", "diffing", "rendering"]
      },
      {
        "title": "Finite State Machine for Form Validation",
        "description": "Implements a finite state machine to handle complex form validation logic",
        "code": "class FormValidationFSM {\n  constructor() {\n    this.states = {\n      INITIAL: 'initial',\n      VALIDATING: 'validating',\n      VALID: 'valid',\n      INVALID: 'invalid',\n      SUBMITTING: 'submitting',\n      SUBMITTED: 'submitted',\n      ERROR: 'error'\n    };\n    this.currentState = this.states.INITIAL;\n  }\n\n  transition(action, data) {\n    switch (this.currentState) {\n      case this.states.INITIAL:\n        if (action === 'START_VALIDATION') {\n          this.currentState = this.states.VALIDATING;\n          this.validate(data);\n        }\n        break;\n      case this.states.VALIDATING:\n        if (action === 'VALIDATION_SUCCESS') {\n          this.currentState = this.states.VALID;\n        } else if (action === 'VALIDATION_FAILURE') {\n          this.currentState = this.states.INVALID;\n        }\n        break;\n      case this.states.VALID:\n        if (action === 'SUBMIT') {\n          this.currentState = this.states.SUBMITTING;\n          this.submitForm(data);\n        }\n        break;\n      case this.states.INVALID:\n        if (action === 'START_VALIDATION') {\n          this.currentState = this.states.VALIDATING;\n          this.validate(data);\n        }\n        break;\n      case this.states.SUBMITTING:\n        if (action === 'SUBMIT_SUCCESS') {\n          this.currentState = this.states.SUBMITTED;\n        } else if (action === 'SUBMIT_FAILURE') {\n          this.currentState = this.states.ERROR;\n        }\n        break;\n      case this.states.SUBMITTED:\n      case this.states.ERROR:\n        if (action === 'RESET') {\n          this.currentState = this.states.INITIAL;\n        }\n        break;\n    }\n    console.log(`Transitioned to state: ${this.currentState}`);\n  }\n\n  async validate(data) {\n    // Simulating asynchronous validation\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    const isValid = Object.values(data).every(value => value.trim() !== '');\n    this.transition(isValid ? 'VALIDATION_SUCCESS' : 'VALIDATION_FAILURE');\n  }\n\n  async submitForm(data) {\n    // Simulating form submission\n    await new Promise(resolve => setTimeout(resolve, 1500));\n    const isSuccess = Math.random() > 0.5; // Simulating success/failure\n    this.transition(isSuccess ? 'SUBMIT_SUCCESS' : 'SUBMIT_FAILURE');\n  }\n}\n\n// Usage\nconst form = new FormValidationFSM();\nconst formData = { name: 'John Doe', email: 'john@example.com' };\n\nform.transition('START_VALIDATION', formData);\n// After validation...\nform.transition('SUBMIT', formData);\n// After submission...\nform.transition('RESET');",
        "language": "javascript",
        "category": "Form Handling",
        "tags": ["javascript", "fsm", "form-validation", "state-management"]
      },
      {
        "title": "WebSocket-based Chat Room",
        "description": "Implements a simple chat room using WebSockets for real-time communication",
        "code": "// Server-side code (Node.js with ws library)\nconst WebSocket = require('ws');\nconst server = new WebSocket.Server({ port: 8080 });\n\nconst clients = new Set();\n\nserver.on('connection', (ws) => {\n  clients.add(ws);\n\n  ws.on('message', (message) => {\n    broadcast(message);\n  });\n\n  ws.on('close', () => {\n    clients.delete(ws);\n  });\n});\n\nfunction broadcast(message) {\n  for (let client of clients) {\n    if (client.readyState === WebSocket.OPEN) {\n      client.send(message);\n    }\n  }\n}\n\n// Client-side code\nclass ChatRoom {\n  constructor(url) {\n    this.socket = new WebSocket(url);\n    this.messageCallbacks = [];\n\n    this.socket.addEventListener('message', (event) => {\n      this.messageCallbacks.forEach(callback => callback(event.data));\n    });\n  }\n\n  send(message) {\n    if (this.socket.readyState === WebSocket.OPEN) {\n      this.socket.send(message);\n    } else {\n      console.error('WebSocket is not open. Message not sent.');\n    }\n  }\n\n  onMessage(callback) {\n    this.messageCallbacks.push(callback);\n  }\n\n  close() {\n    this.socket.close();\n  }\n}\n\n// Usage\nconst chatRoom = new ChatRoom('ws://localhost:8080');\n\nchatRoom.onMessage((message) => {\n  console.log('Received:', message);\n});\n\nchatRoom.send('Hello, everyone!');\n\n// Don't forget to close the connection when done\n// chatRoom.close();",
        "language": "javascript",
        "category": "Real-time Communication",
        "tags": ["javascript", "websocket", "chat", "real-time"]
      },
      {
        "title": "Custom Router Implementation",
        "description": "A simple client-side router for single-page applications",
        "code": "class Router {\n  constructor(routes) {\n    this.routes = routes;\n    this.currentRoute = null;\n    this.rootElement = document.getElementById('app');\n\n    window.addEventListener('popstate', this.handlePopState.bind(this));\n    document.addEventListener('click', this.handleClick.bind(this));\n\n    this.navigate(window.location.pathname);\n  }\n\n  handlePopState() {\n    this.navigate(window.location.pathname);\n  }\n\n  handleClick(e) {\n    if (e.target.matches('[data-link]')) {\n      e.preventDefault();\n      this.navigate(e.target.href);\n    }\n  }\n\n  async navigate(url) {\n    const matchedRoute = this.routes.find(route => route.path === url);\n\n    if (!matchedRoute) {\n      console.error('No matching route found');\n      return;\n    }\n\n    if (this.currentRoute && this.currentRoute.onLeave) {\n      this.currentRoute.onLeave();\n    }\n\n    this.currentRoute = matchedRoute;\n\n    const view = await matchedRoute.view();\n    this.rootElement.innerHTML = '';\n    this.rootElement.appendChild(view);\n\n    if (this.currentRoute.onEnter) {\n      this.currentRoute.onEnter();\n    }\n\n    window.history.pushState(null, '', url);\n  }\n}\n\n// Usage\nconst router = new Router([\n  {\n    path: '/',\n    view: async () => {\n      const element = document.createElement('div');\n      element.innerHTML = '<h1>Home</h1>';\n      return element;\n    },\n    onEnter: () => console.log('Entered Home page'),\n    onLeave: () => console.log('Left Home page')\n  },\n  {\n    path: '/about',\n    view: async () => {\n      const element = document.createElement('div');\n      element.innerHTML = '<h1>About</h1>';\n      return element;\n    }\n  },\n  {\n    path: '/contact',\n    view: async () => {\n      const element = document.createElement('div');\n      element.innerHTML = '<h1>Contact</h1>';\n      return element;\n    }\n  }\n]);\n\n// Navigate programmatically\nrouter.navigate('/about');",
        "language": "javascript",
        "category": "Routing",
        "tags": ["javascript", "spa", "routing", "navigation"]
      },

      {
        "title": "Dependency Injection Container",
        "description": "A simple dependency injection container for managing and resolving dependencies in JavaScript applications",
        "code": `class DIContainer {
    constructor() {
      this.dependencies = new Map();
    }
  
    register(name, dependency) {
      this.dependencies.set(name, dependency);
    }
  
    resolve(name) {
      const dependency = this.dependencies.get(name);
      if (!dependency) {
        throw new Error(\`Dependency \${name} not found\`);
      }
      if (typeof dependency === 'function') {
        return dependency(this);
      }
      return dependency;
    }
  }
  
  // Usage
  const container = new DIContainer();
  
  container.register('config', { apiUrl: 'https://api.example.com' });
  container.register('apiService', (c) => new ApiService(c.resolve('config')));
  
  const apiService = container.resolve('apiService');`,
        "language": "javascript",
        "category": "Design Patterns",
        "tags": ["dependency-injection", "inversion-of-control", "design-pattern", "javascript"]
      },
      {
        "title": "Immutable State Update Utility",
        "description": "A utility function for updating nested immutable state objects in React or Redux applications",
        "code": `function updateImmutableState(state, path, value) {
    if (path.length === 0) {
      return value;
    }
  
    const [head, ...rest] = path;
    const updatedValue = updateImmutableState(state[head], rest, value);
  
    if (Array.isArray(state)) {
      return [
        ...state.slice(0, head),
        updatedValue,
        ...state.slice(head + 1)
      ];
    }
  
    return {
      ...state,
      [head]: updatedValue
    };
  }
  
  // Usage
  const initialState = {
    user: {
      profile: {
        name: 'John Doe',
        age: 30
      },
      preferences: {
        theme: 'light'
      }
    }
  };
  
  const updatedState = updateImmutableState(initialState, ['user', 'profile', 'age'], 31);
  console.log(updatedState.user.profile.age); // 31
  console.log(initialState === updatedState); // false (new reference)`,
        "language": "javascript",
        "category": "State Management",
        "tags": ["immutable", "state-management", "react", "redux", "javascript"]
      },
      {
        "title": "Custom React Hook: useIntersectionObserver",
        "description": "A custom React hook for detecting when an element enters or leaves the viewport using the Intersection Observer API",
        "code": `import { useState, useEffect, useRef } from 'react';
  
  function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, [options]);
  
    return [targetRef, isIntersecting];
  }
  
  // Usage
  function LazyLoadedImage({ src, alt }) {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  
    return (
      <div ref={ref}>
        {isIntersecting ? (
          <img src={src} alt={alt} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }`,
        "language": "javascript",
        "category": "React Hooks",
        "tags": ["react", "hooks", "intersection-observer", "lazy-loading", "javascript"]
      },
      {
        "title": "Tree Traversal Utility",
        "description": "A utility for traversing and manipulating tree-like data structures with support for different traversal methods",
        "code": `class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  }
  
  class TreeTraversal {
    static depthFirst(node, callback) {
      callback(node);
      for (const child of node.children) {
        this.depthFirst(child, callback);
      }
    }
  
    static breadthFirst(root) {
      const queue = [root];
      const result = [];
  
      while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);
        queue.push(...node.children);
      }
  
      return result;
    }
  
    static find(node, predicate) {
      if (predicate(node)) {
        return node;
      }
  
      for (const child of node.children) {
        const result = this.find(child, predicate);
        if (result) {
          return result;
        }
      }
  
      return null;
    }
  
    static map(node, transform) {
      const newNode = new TreeNode(transform(node.value));
      newNode.children = node.children.map(child => this.map(child, transform));
      return newNode;
    }
  }
  
  // Usage
  const root = new TreeNode(1);
  const child1 = new TreeNode(2);
  const child2 = new TreeNode(3);
  const grandchild1 = new TreeNode(4);
  const grandchild2 = new TreeNode(5);
  
  root.addChild(child1);
  root.addChild(child2);
  child1.addChild(grandchild1);
  child2.addChild(grandchild2);
  
  console.log(TreeTraversal.breadthFirst(root)); // [1, 2, 3, 4, 5]
  
  const doubledTree = TreeTraversal.map(root, value => value * 2);
  console.log(TreeTraversal.breadthFirst(doubledTree)); // [2, 4, 6, 8, 10]`,
        "language": "javascript",
        "category": "Data Structures",
        "tags": ["tree", "traversal", "data-structure", "algorithm", "javascript"]
      },
      {
        "title": "Custom React Error Boundary",
        "description": "A reusable Error Boundary component for catching and handling errors in React applications",
        "code": `import React from 'react';
  
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({ error, errorInfo });
      // You can also log the error to an error reporting service
      console.error("Uncaught error:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.fallback ? (
          this.props.fallback(this.state.error, this.state.errorInfo)
        ) : (
          <div>
            <h1>Something went wrong.</h1>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
  
      return this.props.children;
    }
  }
  
  // Usage
  function App() {
    return (
      <ErrorBoundary fallback={(error, errorInfo) => (
        <div>
          <h1>Oops! An error occurred.</h1>
          <p>{error.toString()}</p>
          <details>
            {errorInfo.componentStack}
          </details>
        </div>
      )}>
        <MyComponent />
      </ErrorBoundary>
    );
  }`,
        "language": "javascript",
        "category": "React Components",
        "tags": ["react", "error-handling", "error-boundary", "component", "javascript"]
      },
      {
        "title": "Functional Programming Utilities",
        "description": "A set of utility functions for functional programming in JavaScript, including partial application and function composition",
        "code": `const partial = (fn, ...args) => (...moreArgs) => fn(...args, ...moreArgs);
  
  const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
  
  const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
  
  const curry = (fn, arity = fn.length) => {
    return function curried(...args) {
      if (args.length >= arity) return fn(...args);
      return (...moreArgs) => curried(...args, ...moreArgs);
    };
  };
  
  // Usage examples
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  
  const add5 = partial(add, 5);
  console.log(add5(3)); // 8
  
  const multiplyBy2AndAdd5 = compose(add5, x => x * 2);
  console.log(multiplyBy2AndAdd5(3)); // 11
  
  const add5AndMultiplyBy2 = pipe(add5, x => x * 2);
  console.log(add5AndMultiplyBy2(3)); // 16
  
  const curriedMultiply = curry(multiply);
  console.log(curriedMultiply(2)(3)); // 6`,
        "language": "javascript",
        "category": "Functional Programming",
        "tags": ["functional-programming", "composition", "curry", "partial-application", "javascript"]
      },

      {
        "title": "Parallel Promise Execution with Progress",
        "description": "Execute multiple promises in parallel with a concurrency limit and track progress",
        "code": "async function parallelWithProgress(tasks, concurrency = 3) {\n  const results = [];\n  const queue = [...tasks];\n  const workers = new Set();\n\n  let completed = 0;\n  const total = queue.length;\n\n  return new Promise((resolve) => {\n    const executeTask = async () => {\n      if (queue.length === 0 && workers.size === 0) {\n        resolve(results);\n        return;\n      }\n\n      while (queue.length > 0 && workers.size < concurrency) {\n        const task = queue.shift();\n        const promise = task();\n        workers.add(promise);\n\n        promise.then((result) => {\n          results.push(result);\n          workers.delete(promise);\n          completed++;\n          console.log(`Progress: ${completed}/${total}`);\n          executeTask();\n        });\n      }\n    };\n\n    executeTask();\n  });\n}\n\n// Usage\nconst tasks = [\n  () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000)),\n  () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 2000)),\n  () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 1500)),\n  () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 800)),\n  () => new Promise(resolve => setTimeout(() => resolve('Task 5'), 1200))\n];\n\nparallelWithProgress(tasks).then(results => console.log('All tasks completed:', results));",
        "language": "javascript",
        "category": "Asynchronous Programming",
        "tags": ["promises", "concurrency", "progress-tracking", "async-await"]
      },
      {
        "title": "Reactive Data Store",
        "description": "A simple reactive data store with subscription mechanism",
        "code": "class ReactiveStore {\n  constructor(initialState = {}) {\n    this.state = initialState;\n    this.subscribers = new Map();\n    this.nextSubscriberId = 1;\n  }\n\n  getState() {\n    return { ...this.state };\n  }\n\n  setState(newState) {\n    this.state = { ...this.state, ...newState };\n    this.notifySubscribers();\n  }\n\n  subscribe(callback) {\n    const id = this.nextSubscriberId++;\n    this.subscribers.set(id, callback);\n    return () => this.subscribers.delete(id);\n  }\n\n  notifySubscribers() {\n    for (const callback of this.subscribers.values()) {\n      callback(this.getState());\n    }\n  }\n}\n\n// Usage\nconst store = new ReactiveStore({ count: 0, name: 'John' });\n\nconst unsubscribe = store.subscribe((state) => {\n  console.log('State updated:', state);\n});\n\nstore.setState({ count: 1 });\nstore.setState({ name: 'Jane' });\n\nunsubscribe(); // Stop receiving updates",
        "language": "javascript",
        "category": "State Management",
        "tags": ["reactive", "store", "subscription", "state-management"]
      },
      {
        "title": "Custom Iterator for Pagination",
        "description": "Implement a custom iterator for paginated API requests",
        "code": "class PaginatedApiIterator {\n  constructor(baseUrl, pageSize = 10) {\n    this.baseUrl = baseUrl;\n    this.pageSize = pageSize;\n    this.currentPage = 1;\n    this.cache = [];\n    this.hasMore = true;\n  }\n\n  async fetchPage() {\n    const url = `${this.baseUrl}?page=${this.currentPage}&pageSize=${this.pageSize}`;\n    const response = await fetch(url);\n    const data = await response.json();\n    this.hasMore = data.hasMore;\n    return data.items;\n  }\n\n  async *[Symbol.asyncIterator]() {\n    while (this.hasMore || this.cache.length > 0) {\n      if (this.cache.length === 0) {\n        const items = await this.fetchPage();\n        this.cache.push(...items);\n        this.currentPage++;\n      }\n      yield this.cache.shift();\n    }\n  }\n}\n\n// Usage\nconst apiIterator = new PaginatedApiIterator('https://api.example.com/items');\n\n(async () => {\n  for await (const item of apiIterator) {\n    console.log(item);\n    // Process each item\n  }\n})();",
        "language": "javascript",
        "category": "API Integration",
        "tags": ["iterator", "pagination", "async-iterator", "api"]
      },
      {
        "title": "Finite State Machine for UI Workflow",
        "description": "Implement a finite state machine to manage complex UI workflows",
        "code": "class StateMachine {\n  constructor(initialState, transitions, onStateChange) {\n    this.currentState = initialState;\n    this.transitions = transitions;\n    this.onStateChange = onStateChange;\n  }\n\n  transition(action) {\n    const nextState = this.transitions[this.currentState][action];\n    if (nextState) {\n      this.currentState = nextState;\n      this.onStateChange(this.currentState, action);\n    } else {\n      console.warn(`Invalid transition: ${this.currentState} -> ${action}`);\n    }\n  }\n\n  getState() {\n    return this.currentState;\n  }\n}\n\n// Usage for a multi-step form\nconst formWorkflow = new StateMachine(\n  'personalInfo',\n  {\n    personalInfo: { next: 'addressInfo', previous: 'personalInfo' },\n    addressInfo: { next: 'paymentInfo', previous: 'personalInfo' },\n    paymentInfo: { next: 'confirmation', previous: 'addressInfo' },\n    confirmation: { submit: 'submitted', previous: 'paymentInfo' },\n    submitted: {}\n  },\n  (newState, action) => {\n    console.log(`State changed to ${newState} after ${action}`);\n    // Update UI based on new state\n  }\n);\n\n// Simulate form navigation\nformWorkflow.transition('next');\nformWorkflow.transition('next');\nformWorkflow.transition('previous');\nformWorkflow.transition('next');\nformWorkflow.transition('next');\nformWorkflow.transition('submit');",
        "language": "javascript",
        "category": "UI State Management",
        "tags": ["state-machine", "workflow", "ui-management", "form-handling"]
      },
      {
        "title": "Advanced Memoization with LRU Cache",
        "description": "Implement a memoization function with a Least Recently Used (LRU) cache",
        "code": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n\n  get(key) {\n    if (!this.cache.has(key)) return undefined;\n    const value = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, value);\n    return value;\n  }\n\n  put(key, value) {\n    if (this.cache.has(key)) {\n      this.cache.delete(key);\n    } else if (this.cache.size >= this.capacity) {\n      this.cache.delete(this.cache.keys().next().value);\n    }\n    this.cache.set(key, value);\n  }\n}\n\nfunction memoizeWithLRU(fn, capacity = 100) {\n  const cache = new LRUCache(capacity);\n\n  return function(...args) {\n    const key = JSON.stringify(args);\n    const cachedResult = cache.get(key);\n\n    if (cachedResult !== undefined) {\n      return cachedResult;\n    }\n\n    const result = fn.apply(this, args);\n    cache.put(key, result);\n    return result;\n  };\n}\n\n// Usage\nconst expensiveOperation = (a, b) => {\n  console.log('Performing expensive operation');\n  return a * b;\n};\n\nconst memoizedOperation = memoizeWithLRU(expensiveOperation, 5);\n\nconsole.log(memoizedOperation(2, 3)); // Performs operation\nconsole.log(memoizedOperation(2, 3)); // Returns cached result\nconsole.log(memoizedOperation(3, 4)); // Performs operation\nconsole.log(memoizedOperation(4, 5)); // Performs operation\nconsole.log(memoizedOperation(5, 6)); // Performs operation\nconsole.log(memoizedOperation(6, 7)); // Performs operation\nconsole.log(memoizedOperation(2, 3)); // Returns cached result (moves to front)\nconsole.log(memoizedOperation(7, 8)); // Performs operation, evicts oldest entry",
        "language": "javascript",
        "category": "Performance Optimization",
        "tags": ["memoization", "lru-cache", "optimization", "caching"]
      },

    {
        "title": "Trie Data Structure Implementation",
        "description": "A Trie (prefix tree) implementation for efficient string storage and retrieval, useful for autocomplete and spell-checking features.",
        "code": "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isEndOfWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let current = this.root;\n    for (let char of word) {\n      if (!current.children[char]) {\n        current.children[char] = new TrieNode();\n      }\n      current = current.children[char];\n    }\n    current.isEndOfWord = true;\n  }\n\n  search(word) {\n    let node = this.traverse(word);\n    return node !== null && node.isEndOfWord;\n  }\n\n  startsWith(prefix) {\n    return this.traverse(prefix) !== null;\n  }\n\n  traverse(word) {\n    let current = this.root;\n    for (let char of word) {\n      if (!current.children[char]) {\n        return null;\n      }\n      current = current.children[char];\n    }\n    return current;\n  }\n\n  findWordsWithPrefix(prefix) {\n    const result = [];\n    let current = this.traverse(prefix);\n    if (current) {\n      this.dfs(current, prefix, result);\n    }\n    return result;\n  }\n\n  dfs(node, prefix, result) {\n    if (node.isEndOfWord) {\n      result.push(prefix);\n    }\n    for (let char in node.children) {\n      this.dfs(node.children[char], prefix + char, result);\n    }\n  }\n}",
        "language": "javascript",
        "category": "Data Structures",
        "tags": ["javascript", "trie", "data-structure", "string-manipulation"]
      },
      {
        "title": "LRU Cache Implementation",
        "description": "An efficient Least Recently Used (LRU) cache implementation using a combination of a hash map and a doubly linked list.",
        "code": "class Node {\n  constructor(key, value) {\n    this.key = key;\n    this.value = value;\n    this.prev = null;\n    this.next = null;\n  }\n}\n\nclass LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.cache = new Map();\n    this.head = new Node(0, 0);\n    this.tail = new Node(0, 0);\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n\n  get(key) {\n    if (this.cache.has(key)) {\n      const node = this.cache.get(key);\n      this.removeNode(node);\n      this.addToHead(node);\n      return node.value;\n    }\n    return -1;\n  }\n\n  put(key, value) {\n    if (this.cache.has(key)) {\n      const node = this.cache.get(key);\n      this.removeNode(node);\n      node.value = value;\n      this.addToHead(node);\n    } else {\n      const newNode = new Node(key, value);\n      this.cache.set(key, newNode);\n      this.addToHead(newNode);\n      if (this.cache.size > this.capacity) {\n        const tailPrev = this.tail.prev;\n        this.removeNode(tailPrev);\n        this.cache.delete(tailPrev.key);\n      }\n    }\n  }\n\n  removeNode(node) {\n    node.prev.next = node.next;\n    node.next.prev = node.prev;\n  }\n\n  addToHead(node) {\n    node.next = this.head.next;\n    node.prev = this.head;\n    this.head.next.prev = node;\n    this.head.next = node;\n  }\n}",
        "language": "javascript",
        "category": "Caching",
        "tags": ["javascript", "cache", "lru", "data-structure"]
      },
      {
        "title": "Custom React Hook: useLocalStorage",
        "description": "A custom React hook for managing state in localStorage, with automatic JSON parsing and stringifying.",
        "code": "import { useState, useEffect } from 'react';\n\nconst useLocalStorage = (key, initialValue) => {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error('Error reading from localStorage:', error);\n      return initialValue;\n    }\n  });\n\n  const setValue = (value) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.error('Error setting localStorage:', error);\n    }\n  };\n\n  useEffect(() => {\n    const handleStorageChange = (event) => {\n      if (event.key === key) {\n        setStoredValue(JSON.parse(event.newValue));\n      }\n    };\n\n    window.addEventListener('storage', handleStorageChange);\n    return () => window.removeEventListener('storage', handleStorageChange);\n  }, [key]);\n\n  return [storedValue, setValue];\n};\n\nexport default useLocalStorage;",
        "language": "javascript",
        "category": "React Hooks",
        "tags": ["react", "hooks", "localStorage", "state-management"]
      },
      {
        "title": "Dijkstra's Algorithm Implementation",
        "description": "An implementation of Dijkstra's algorithm for finding the shortest path in a weighted graph.",
        "code": "class PriorityQueue {\n  constructor() {\n    this.values = [];\n  }\n\n  enqueue(val, priority) {\n    this.values.push({val, priority});\n    this.sort();\n  }\n\n  dequeue() {\n    return this.values.shift();\n  }\n\n  sort() {\n    this.values.sort((a, b) => a.priority - b.priority);\n  }\n}\n\nclass WeightedGraph {\n  constructor() {\n    this.adjacencyList = {};\n  }\n\n  addVertex(vertex) {\n    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];\n  }\n\n  addEdge(vertex1, vertex2, weight) {\n    this.adjacencyList[vertex1].push({node: vertex2, weight});\n    this.adjacencyList[vertex2].push({node: vertex1, weight});\n  }\n\n  dijkstra(start, finish) {\n    const nodes = new PriorityQueue();\n    const distances = {};\n    const previous = {};\n    let path = [];\n    let smallest;\n\n    for (let vertex in this.adjacencyList) {\n      if (vertex === start) {\n        distances[vertex] = 0;\n        nodes.enqueue(vertex, 0);\n      } else {\n        distances[vertex] = Infinity;\n        nodes.enqueue(vertex, Infinity);\n      }\n      previous[vertex] = null;\n    }\n\n    while (nodes.values.length) {\n      smallest = nodes.dequeue().val;\n      if (smallest === finish) {\n        while (previous[smallest]) {\n          path.push(smallest);\n          smallest = previous[smallest];\n        }\n        break;\n      }\n      if (smallest || distances[smallest] !== Infinity) {\n        for (let neighbor in this.adjacencyList[smallest]) {\n          let nextNode = this.adjacencyList[smallest][neighbor];\n          let candidate = distances[smallest] + nextNode.weight;\n          let nextNeighbor = nextNode.node;\n          if (candidate < distances[nextNeighbor]) {\n            distances[nextNeighbor] = candidate;\n            previous[nextNeighbor] = smallest;\n            nodes.enqueue(nextNeighbor, candidate);\n          }\n        }\n      }\n    }\n    return path.concat(smallest).reverse();\n  }\n}",
        "language": "javascript",
        "category": "Algorithms",
        "tags": ["javascript", "graph", "dijkstra", "shortest-path"]
      },
      {
        "title": "Web Worker for Heavy Computations",
        "description": "A utility for offloading heavy computations to a Web Worker, preventing UI freezes.",
        "code": "// main.js\nconst createWorker = (workerFunction) => {\n  const blob = new Blob(['(' + workerFunction.toString() + ')()'], { type: 'application/javascript' });\n  const url = URL.createObjectURL(blob);\n  return new Worker(url);\n};\n\nconst heavyComputationWorker = createWorker(() => {\n  self.addEventListener('message', (e) => {\n    const { data } = e;\n    // Perform heavy computation here\n    const result = heavyComputation(data);\n    self.postMessage(result);\n  });\n\n  function heavyComputation(data) {\n    // Simulating a heavy computation\n    let result = 0;\n    for (let i = 0; i < 1000000000; i++) {\n      result += Math.sqrt(i);\n    }\n    return result;\n  }\n});\n\n// Usage\nheavyComputationWorker.onmessage = (e) => {\n  console.log('Computation result:', e.data);\n};\n\nheavyComputationWorker.postMessage('Start computation');\n\n// Don't forget to terminate the worker when it's no longer needed\n// heavyComputationWorker.terminate();",
        "language": "javascript",
        "category": "Performance Optimization",
        "tags": ["javascript", "web-worker", "performance", "concurrency"]
      },
      {
        "title": "Custom React Hook for Infinite Scrolling",
        "description": "A reusable React hook that implements infinite scrolling functionality, perfect for loading large datasets in chunks as the user scrolls down a page.",
        "code": "import { useState, useEffect, useCallback } from 'react';\n\nconst useInfiniteScroll = (callback, options = {}) => {\n  const {\n    threshold = 100,\n    initialPage = 1,\n    loadingRef = null\n  } = options;\n\n  const [page, setPage] = useState(initialPage);\n  const [loading, setLoading] = useState(false);\n\n  const handleScroll = useCallback(() => {\n    if (loading) return;\n\n    const windowHeight = window.innerHeight;\n    const documentHeight = document.documentElement.scrollHeight;\n    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n\n    if (documentHeight - (scrollTop + windowHeight) < threshold) {\n      setLoading(true);\n      callback(page).then(() => {\n        setPage(prevPage => prevPage + 1);\n        setLoading(false);\n      });\n    }\n  }, [callback, loading, page, threshold]);\n\n  useEffect(() => {\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, [handleScroll]);\n\n  return { loading, loadingRef };\n};\n\nexport default useInfiniteScroll;\n\n// Usage Example:\n// const YourComponent = () => {\n//   const [items, setItems] = useState([]);\n//   const loadMore = async (page) => {\n//     const newItems = await fetchItems(page);\n//     setItems(prevItems => [...prevItems, ...newItems]);\n//   };\n//   const { loading, loadingRef } = useInfiniteScroll(loadMore);\n//\n//   return (\n//     <div>\n//       {items.map(item => <ItemComponent key={item.id} {...item} />)}\n//       {loading && <div ref={loadingRef}>Loading more...</div>}\n//     </div>\n//   );\n// };",
        "language": "javascript",
        "category": "React Hooks",
        "tags": ["react", "infinite-scroll", "custom-hook", "performance", "pagination"]
      },
      {
        "title": "Custom Event Bus",
        "description": "A robust event bus implementation for decoupling components in large applications. Supports wildcard subscriptions and once-only listeners.",
        "code": "class EventBus {\n  constructor() {\n    this.events = {};\n  }\n\n  on(event, callback) {\n    if (!this.events[event]) this.events[event] = [];\n    this.events[event].push(callback);\n    return () => this.off(event, callback);\n  }\n\n  once(event, callback) {\n    const onceWrapper = (...args) => {\n      callback(...args);\n      this.off(event, onceWrapper);\n    };\n    return this.on(event, onceWrapper);\n  }\n\n  off(event, callback) {\n    if (!this.events[event]) return;\n    this.events[event] = this.events[event].filter(cb => cb !== callback);\n  }\n\n  emit(event, ...args) {\n    if (this.events[event]) {\n      this.events[event].forEach(callback => callback(...args));\n    }\n    \n    // Handle wildcard subscriptions\n    Object.keys(this.events).forEach(key => {\n      if (key.endsWith('*') && event.startsWith(key.slice(0, -1))) {\n        this.events[key].forEach(callback => callback(event, ...args));\n      }\n    });\n  }\n\n  clear(event) {\n    if (event) {\n      delete this.events[event];\n    } else {\n      this.events = {};\n    }\n  }\n}\n\n// Usage\nconst bus = new EventBus();\nconst unsubscribe = bus.on('user:login', (userId) => console.log(`User ${userId} logged in`));\nbus.once('app:start', () => console.log('App started'));\nbus.on('user:*', (event, ...args) => console.log(`Caught ${event}`, args));\n\nbus.emit('user:login', 123);\nbus.emit('app:start');\nbus.emit('user:logout', 123);\n\nunsubscribe(); // Remove the 'user:login' listener",
        "language": "javascript",
        "category": "Application Architecture",
        "tags": ["event-driven", "pubsub", "decoupling", "communication", "architecture"]
      },

    {
        "title": "Fibonacci Sequence Generator",
        "description": "A generator function that yields Fibonacci numbers indefinitely",
        "code": "function* fibonacciGenerator() {\n  let a = 0, b = 1;\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nconst fib = fibonacciGenerator();\nfor (let i = 0; i < 10; i++) {\n  console.log(fib.next().value);\n}",
        "language": "javascript",
        "category": "Algorithms",
        "tags": ["generator", "fibonacci", "sequence", "algorithm"]
      },
      {
        "title": "Async Retry with Exponential Backoff",
        "description": "Retries an async function with exponential backoff and jitter",
        "code": "async function retryWithBackoff(fn, maxRetries = 5, baseDelay = 100) {\n  for (let attempt = 0; attempt < maxRetries; attempt++) {\n    try {\n      return await fn();\n    } catch (error) {\n      if (attempt === maxRetries - 1) throw error;\n      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 100;\n      await new Promise(resolve => setTimeout(resolve, delay));\n    }\n  }\n}",
        "language": "javascript",
        "category": "Error Handling",
        "tags": ["async", "retry", "backoff", "error-handling"]
      },
      {
        "title": "Bloom Filter Implementation",
        "description": "A space-efficient probabilistic data structure for set membership testing",
        "code": "class BloomFilter {\n  constructor(size = 1000, hashFunctions = 3) {\n    this.size = size;\n    this.hashFunctions = hashFunctions;\n    this.bitArray = new Array(size).fill(0);\n  }\n\n  add(item) {\n    for (let i = 0; i < this.hashFunctions; i++) {\n      const index = this.hash(item, i);\n      this.bitArray[index] = 1;\n    }\n  }\n\n  contains(item) {\n    for (let i = 0; i < this.hashFunctions; i++) {\n      const index = this.hash(item, i);\n      if (this.bitArray[index] === 0) return false;\n    }\n    return true;\n  }\n\n  hash(item, seed) {\n    let hash = 0;\n    for (let i = 0; i < item.length; i++) {\n      hash = (hash << 5) + hash + item.charCodeAt(i) + seed;\n      hash = hash & hash;\n    }\n    return Math.abs(hash) % this.size;\n  }\n}",
        "language": "javascript",
        "category": "Data Structures",
        "tags": ["bloom-filter", "probabilistic", "data-structure", "set"]
      },
      {
        "title": "Web Worker Task Queue",
        "description": "Manages a queue of tasks to be executed in a Web Worker",
        "code": "// Main thread code\nconst worker = new Worker('worker.js');\nconst taskQueue = [];\n\nfunction addTask(task) {\n  taskQueue.push(task);\n  if (taskQueue.length === 1) {\n    worker.postMessage(task);\n  }\n}\n\nworker.onmessage = function(e) {\n  console.log('Task completed:', e.data);\n  taskQueue.shift();\n  if (taskQueue.length > 0) {\n    worker.postMessage(taskQueue[0]);\n  }\n};\n\n// worker.js\nself.onmessage = function(e) {\n  const result = performHeavyComputation(e.data);\n  self.postMessage(result);\n};\n\nfunction performHeavyComputation(data) {\n  // Simulating a time-consuming task\n  let result = 0;\n  for (let i = 0; i < 1000000000; i++) {\n    result += Math.sqrt(i);\n  }\n  return result;\n}",
        "language": "javascript",
        "category": "Concurrency",
        "tags": ["web-worker", "task-queue", "concurrency", "performance"]
      },
      {
        "title": "Custom React Hook: useInfiniteScroll",
        "description": "A custom React hook for implementing infinite scrolling",
        "code": "import { useState, useEffect, useCallback } from 'react';\n\nfunction useInfiniteScroll(callback) {\n  const [isFetching, setIsFetching] = useState(false);\n\n  const handleScroll = useCallback(() => {\n    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;\n    setIsFetching(true);\n  }, [isFetching]);\n\n  useEffect(() => {\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, [handleScroll]);\n\n  useEffect(() => {\n    if (!isFetching) return;\n    callback(() => {\n      setIsFetching(false);\n    });\n  }, [isFetching, callback]);\n\n  return [isFetching, setIsFetching];\n}\n\n// Usage\nfunction App() {\n  const [items, setItems] = useState([]);\n  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);\n\n  function fetchMoreListItems(done) {\n    // Fetch more items and update state\n    setTimeout(() => {\n      setItems(prevItems => [...prevItems, ...Array(20).fill(0)]);\n      done();\n    }, 2000);\n  }\n\n  return (\n    <div>\n      {items.map((item, index) => <div key={index}>Item {index}</div>)}\n      {isFetching && 'Fetching more list items...'}\n    </div>\n  );\n}",
        "language": "javascript",
        "category": "React Hooks",
        "tags": ["react", "custom-hook", "infinite-scroll", "pagination"]
      },
      {
        "title": "Optimistic UI Update Pattern",
        "description": "Implements optimistic UI updates for better perceived performance",
        "code": "async function optimisticUpdate(updateUI, apiCall) {\n  const originalState = getState();\n  try {\n    updateUI(); // Optimistically update UI\n    await apiCall(); // Perform actual API call\n  } catch (error) {\n    console.error('API call failed:', error);\n    restoreState(originalState); // Revert UI on failure\n    showErrorNotification('Update failed. Please try again.');\n  }\n}\n\nfunction getState() {\n  // Return current state\n}\n\nfunction restoreState(state) {\n  // Restore UI to previous state\n}\n\nfunction showErrorNotification(message) {\n  // Show error message to user\n}\n\n// Usage example\nconst addTodo = async (todo) => {\n  await optimisticUpdate(\n    () => {\n      todos.push(todo); // Optimistic update\n      renderTodos();\n    },\n    async () => {\n      await api.addTodo(todo); // Actual API call\n    }\n  );\n};",
        "language": "javascript",
        "category": "UI Patterns",
        "tags": ["optimistic-ui", "performance", "error-handling", "api"]
      },
      {
        "title": "Virtual Scroll Implementation",
        "description": "A lightweight virtual scroll implementation for rendering large lists efficiently",
        "code": "class VirtualScroll {\n  constructor(container, itemHeight, totalItems, renderItem) {\n    this.container = container;\n    this.itemHeight = itemHeight;\n    this.totalItems = totalItems;\n    this.renderItem = renderItem;\n    this.visibleItems = Math.ceil(container.clientHeight / itemHeight);\n    this.scrollTop = 0;\n    this.startIndex = 0;\n    this.endIndex = this.visibleItems;\n    \n    this.container.style.height = `${totalItems * itemHeight}px`;\n    this.container.style.position = 'relative';\n    this.container.style.overflow = 'auto';\n    \n    this.container.addEventListener('scroll', this.onScroll.bind(this));\n    this.render();\n  }\n  \n  onScroll() {\n    this.scrollTop = this.container.scrollTop;\n    this.startIndex = Math.floor(this.scrollTop / this.itemHeight);\n    this.endIndex = Math.min(this.startIndex + this.visibleItems, this.totalItems);\n    this.render();\n  }\n  \n  render() {\n    this.container.innerHTML = '';\n    for (let i = this.startIndex; i < this.endIndex; i++) {\n      const item = document.createElement('div');\n      item.style.position = 'absolute';\n      item.style.top = `${i * this.itemHeight}px`;\n      item.style.height = `${this.itemHeight}px`;\n      item.innerHTML = this.renderItem(i);\n      this.container.appendChild(item);\n    }\n  }\n}\n\n// Usage\nconst container = document.getElementById('list-container');\nconst virtualScroll = new VirtualScroll(container, 50, 10000, (index) => `Item ${index}`);\n",
        "language": "javascript",
        "category": "Performance Optimization",
        "tags": ["virtual-scroll", "performance", "dom", "large-lists"]
      },
      {
        "title": "Functional Programming: Transducers",
        "description": "Implements transducers for efficient data transformations",
        "code": "const map = (f) => (step) => (a, c) => step(a, f(c));\nconst filter = (pred) => (step) => (a, c) => pred(c) ? step(a, c) : a;\n\nconst compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));\n\nconst transduce = (xform, reducer, seed, coll) => {\n  const xformReducer = xform(reducer);\n  return coll.reduce(xformReducer, seed);\n};\n\n// Usage\nconst numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst xform = compose(\n  filter(x => x % 2 === 0),\n  map(x => x * x)\n);\n\nconst result = transduce(\n  xform,\n  (acc, x) => [...acc, x],\n  [],\n  numbers\n);\n\nconsole.log(result); // [4, 16, 36, 64, 100]",
        "language": "javascript",
        "category": "Functional Programming",
        "tags": ["transducers", "functional", "composition", "data-transformation"]
      },
      {
        "title": "Reactive State Management with Proxy",
        "description": "Implements a simple reactive state management system using Proxy",
        "code": "function createStore(initialState) {\n  let state = initialState;\n  const listeners = new Set();\n\n  const store = new Proxy({}, {\n    get(_, prop) {\n      return state[prop];\n    },\n    set(_, prop, value) {\n      state[prop] = value;\n      listeners.forEach(listener => listener(state));\n      return true;\n    }\n  });\n\n  function subscribe(listener) {\n    listeners.add(listener);\n    return () => listeners.delete(listener);\n  }\n\n  return { store, subscribe };\n}\n\n// Usage\nconst { store, subscribe } = createStore({ count: 0, name: 'John' });\n\nconst unsubscribe = subscribe(state => {\n  console.log('State changed:', state);\n});\n\nstore.count++; // logs: State changed: { count: 1, name: 'John' }\nstore.name = 'Jane'; // logs: State changed: { count: 1, name: 'Jane' }\n\nunsubscribe(); // Stop listening to changes\n\nstore.count++; // No log output",
        "language": "javascript",
        "category": "State Management",
        "tags": ["reactive", "proxy", "state-management", "observable"]
      },
      {
        "title": "Custom Iterator for Pagination",
        "description": "Implements a custom iterator for paginated API requests",
        "code": "class PaginatedAPI {\n  constructor(baseUrl, itemsPerPage = 10) {\n    this.baseUrl = baseUrl;\n    this.itemsPerPage = itemsPerPage;\n    this.currentPage = 1;\n    this.totalPages = null;\n  }\n\n  async fetchPage(page) {\n    const response = await fetch(`${this.baseUrl}?page=${page}&per_page=${this.itemsPerPage}`);\n    const data = await response.json();\n    this.totalPages = data.total_pages;\n    return data.items;\n  }\n\n  [Symbol.asyncIterator]() {\n    return {\n      next: async () => {\n        if (this.totalPages === null || this.currentPage <= this.totalPages) {\n          const items = await this.fetchPage(this.currentPage++);\n          return { value: items, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n}\n\n// Usage\nconst api = new PaginatedAPI('https://api.example.com/items');\n\n(async () => {\n  for await (const items of api) {\n    console.log('Page items:', items);\n    // Process items here\n  }\n  console.log('All pages processed');\n})();",
        "language": "javascript",
        "category": "API Integration",
        "tags": ["iterator", "pagination", "async", "api"]
      },

    {
        "title": "Binary Search Tree Implementation",
        "description": "A complete implementation of a binary search tree with insertion, deletion, and traversal methods.",
        "code": "class Node {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinarySearchTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(value) {\n    const newNode = new Node(value);\n    if (!this.root) {\n      this.root = newNode;\n      return this;\n    }\n    let current = this.root;\n    while (true) {\n      if (value === current.value) return undefined;\n      if (value < current.value) {\n        if (current.left === null) {\n          current.left = newNode;\n          return this;\n        }\n        current = current.left;\n      } else {\n        if (current.right === null) {\n          current.right = newNode;\n          return this;\n        }\n        current = current.right;\n      }\n    }\n  }\n\n  find(value) {\n    if (!this.root) return false;\n    let current = this.root;\n    while (current) {\n      if (value === current.value) return current;\n      if (value < current.value) current = current.left;\n      else current = current.right;\n    }\n    return false;\n  }\n\n  remove(value) {\n    this.root = this._removeNode(this.root, value);\n  }\n\n  _removeNode(node, value) {\n    if (node === null) return null;\n    if (value < node.value) {\n      node.left = this._removeNode(node.left, value);\n      return node;\n    } else if (value > node.value) {\n      node.right = this._removeNode(node.right, value);\n      return node;\n    } else {\n      if (node.left === null && node.right === null) {\n        return null;\n      }\n      if (node.left === null) return node.right;\n      if (node.right === null) return node.left;\n      let tempNode = this._findMinNode(node.right);\n      node.value = tempNode.value;\n      node.right = this._removeNode(node.right, tempNode.value);\n      return node;\n    }\n  }\n\n  _findMinNode(node) {\n    while (node.left !== null) node = node.left;\n    return node;\n  }\n\n  inOrderTraversal(node = this.root) {\n    if (node !== null) {\n      this.inOrderTraversal(node.left);\n      console.log(node.value);\n      this.inOrderTraversal(node.right);\n    }\n  }\n}",
        "language": "javascript",
        "category": "Data Structures",
        "tags": ["binary search tree", "algorithm", "data structure", "tree traversal"]
      },
      {
        "title": "Pub/Sub Pattern Implementation",
        "description": "A robust implementation of the Publish/Subscribe pattern for event-driven architecture.",
        "code": "class PubSub {\n  constructor() {\n    this.subscribers = {};\n  }\n\n  subscribe(event, callback) {\n    if (!this.subscribers[event]) {\n      this.subscribers[event] = [];\n    }\n    const index = this.subscribers[event].push(callback) - 1;\n    return {\n      unsubscribe: () => {\n        this.subscribers[event].splice(index, 1);\n        if (this.subscribers[event].length === 0) {\n          delete this.subscribers[event];\n        }\n      }\n    };\n  }\n\n  publish(event, data) {\n    if (!this.subscribers[event]) {\n      return;\n    }\n    this.subscribers[event].forEach(callback => callback(data));\n  }\n\n  clearAllSubscriptions() {\n    this.subscribers = {};\n  }\n\n  getSubscriberCount(event) {\n    return this.subscribers[event] ? this.subscribers[event].length : 0;\n  }\n}\n\n// Usage:\n// const pubsub = new PubSub();\n// const subscription = pubsub.subscribe('userLoggedIn', data => console.log(data));\n// pubsub.publish('userLoggedIn', { username: 'John' });\n// subscription.unsubscribe();",
        "language": "javascript",
        "category": "Design Patterns",
        "tags": ["pub/sub", "event-driven", "observer pattern", "messaging"]
      },
      {
        "title": "Functional Programming: Maybe Monad",
        "description": "Implementation of the Maybe monad for handling nullable values in a functional way.",
        "code": "class Maybe {\n  constructor(value) {\n    this._value = value;\n  }\n\n  static of(value) {\n    return new Maybe(value);\n  }\n\n  isNothing() {\n    return this._value === null || this._value === undefined;\n  }\n\n  map(fn) {\n    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this._value));\n  }\n\n  flatMap(fn) {\n    return this.isNothing() ? Maybe.of(null) : fn(this._value);\n  }\n\n  getOrElse(defaultValue) {\n    return this.isNothing() ? defaultValue : this._value;\n  }\n\n  filter(predicate) {\n    return this.isNothing() || !predicate(this._value) ? Maybe.of(null) : this;\n  }\n\n  toString() {\n    return this.isNothing() ? 'Maybe(Nothing)' : `Maybe(${this._value})`;\n  }\n}\n\n// Usage:\n// const result = Maybe.of(5)\n//   .map(x => x * 2)\n//   .flatMap(x => Maybe.of(x + 1))\n//   .filter(x => x > 10)\n//   .getOrElse('Value is not greater than 10');",
        "language": "javascript",
        "category": "Functional Programming",
        "tags": ["monad", "maybe", "nullable", "functional"]
      },
      {
        "title": "Advanced Memoization with Time-based Cache Invalidation",
        "description": "A memoization function that caches results with a time-based invalidation strategy.",
        "code": "function memoizeWithTimeout(fn, timeout = 5000) {\n  const cache = new Map();\n\n  return function(...args) {\n    const key = JSON.stringify(args);\n    const cachedItem = cache.get(key);\n    const now = Date.now();\n\n    if (cachedItem && now - cachedItem.timestamp < timeout) {\n      return cachedItem.result;\n    }\n\n    const result = fn.apply(this, args);\n    cache.set(key, { result, timestamp: now });\n\n    // Clean up expired cache entries\n    for (const [k, v] of cache.entries()) {\n      if (now - v.timestamp >= timeout) {\n        cache.delete(k);\n      }\n    }\n\n    return result;\n  };\n}\n\n// Usage:\n// const expensiveOperation = (a, b) => {\n//   console.log('Calculating...');\n//   return a + b;\n// };\n// const memoizedOperation = memoizeWithTimeout(expensiveOperation, 10000);\n// console.log(memoizedOperation(5, 3)); // Outputs: Calculating... 8\n// console.log(memoizedOperation(5, 3)); // Outputs: 8 (from cache)\n// setTimeout(() => console.log(memoizedOperation(5, 3)), 11000); // Outputs: Calculating... 8 (cache invalidated)",
        "language": "javascript",
        "category": "Performance Optimization",
        "tags": ["memoization", "caching", "performance", "time-based"]
      },
      {
        "title": "Custom React Hook: useIntersectionObserver",
        "description": "A custom React hook for detecting when an element enters or leaves the viewport using the Intersection Observer API.",
        "code": "import { useState, useEffect, useRef } from 'react';\n\nfunction useIntersectionObserver(options = {}) {\n  const [isIntersecting, setIsIntersecting] = useState(false);\n  const targetRef = useRef(null);\n\n  useEffect(() => {\n    const target = targetRef.current;\n    if (!target) return;\n\n    const observer = new IntersectionObserver(([entry]) => {\n      setIsIntersecting(entry.isIntersecting);\n    }, options);\n\n    observer.observe(target);\n\n    return () => {\n      observer.unobserve(target);\n      observer.disconnect();\n    };\n  }, [options]);\n\n  return [targetRef, isIntersecting];\n}\n\n// Usage:\n// function LazyLoadedImage({ src, alt }) {\n//   const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });\n//   return (\n//     <div ref={ref}>\n//       {isVisible ? <img src={src} alt={alt} /> : <div>Loading...</div>}\n//     </div>\n//   );\n// }",
        "language": "javascript",
        "category": "React Hooks",
        "tags": ["react", "hooks", "intersection observer", "lazy loading"]
      },
      {
        "title": "Async Queue with Concurrency Limit",
        "description": "An asynchronous queue implementation with a configurable concurrency limit for parallel task execution.",
        "code": "class AsyncQueue {\n  constructor(concurrency = 1) {\n    this.concurrency = concurrency;\n    this.queue = [];\n    this.running = 0;\n  }\n\n  async add(task) {\n    return new Promise((resolve, reject) => {\n      this.queue.push({ task, resolve, reject });\n      this.run();\n    });\n  }\n\n  async run() {\n    if (this.running >= this.concurrency || this.queue.length === 0) return;\n\n    this.running++;\n    const { task, resolve, reject } = this.queue.shift();\n\n    try {\n      const result = await task();\n      resolve(result);\n    } catch (error) {\n      reject(error);\n    } finally {\n      this.running--;\n      this.run();\n    }\n  }\n\n  async flush() {\n    return Promise.all(this.queue.map(({ task }) => task()));\n  }\n\n  get pendingCount() {\n    return this.queue.length;\n  }\n\n  get runningCount() {\n    return this.running;\n  }\n}\n\n// Usage:\n// const queue = new AsyncQueue(3); // Allow 3 concurrent tasks\n// const task = (id) => () => new Promise(resolve => setTimeout(() => resolve(id), 1000));\n// for (let i = 0; i < 10; i++) {\n//   queue.add(task(i)).then(result => console.log(`Task ${result} completed`));\n// }",
        "language": "javascript",
        "category": "Asynchronous Programming",
        "tags": ["async", "queue", "concurrency", "task management"]
      },
      {
        "title": "Reactive State Management with Proxy",
        "description": "A lightweight reactive state management system using JavaScript Proxies for automatic dependency tracking and updates.",
        "code": "class ReactiveStore {\n  constructor(initialState = {}) {\n    this.state = new Proxy(initialState, {\n      set: (target, property, value) => {\n        const oldValue = target[property];\n        target[property] = value;\n        if (oldValue !== value) {\n          this.notify(property, value, oldValue);\n        }\n        return true;\n      }\n    });\n    this.listeners = new Map();\n  }\n\n  subscribe(property, callback) {\n    if (!this.listeners.has(property)) {\n      this.listeners.set(property, new Set());\n    }\n    this.listeners.get(property).add(callback);\n    return () => {\n      this.listeners.get(property).delete(callback);\n      if (this.listeners.get(property).size === 0) {\n        this.listeners.delete(property);\n      }\n    };\n  }\n\n  notify(property, newValue, oldValue) {\n    if (this.listeners.has(property)) {\n      this.listeners.get(property).forEach(callback => {\n        callback(newValue, oldValue);\n      });\n    }\n  }\n\n  setState(newState) {\n    Object.entries(newState).forEach(([key, value]) => {\n      this.state[key] = value;\n    });\n  }\n\n  getState() {\n    return { ...this.state };\n  }\n}\n\n// Usage:\n// const store = new ReactiveStore({ count: 0, name: 'John' });\n// const unsubscribe = store.subscribe('count', (newValue, oldValue) => {\n//   console.log(`Count changed from ${oldValue} to ${newValue}`);\n// });\n// store.state.count++; // Triggers the subscription\n// unsubscribe(); // Remove the subscription",
        "language": "javascript",
        "category": "State Management",
        "tags": ["reactive", "proxy", "state management", "observer pattern"]
      },

    {
        "title": "Parallel API Request Handler",
        "description": "Handles multiple API requests in parallel with rate limiting and error handling",
        "code": `const parallelApiHandler = async (urls, maxConcurrent = 5, rateLimitMs = 1000) => {
      const queue = [...urls];
      const results = [];
      const errors = [];
      
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      
      const fetchWithRetry = async (url, retries = 3) => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
          return await response.json();
        } catch (error) {
          if (retries > 0) {
            await delay(1000);
            return fetchWithRetry(url, retries - 1);
          }
          throw error;
        }
      };
      
      const worker = async () => {
        while (queue.length) {
          const url = queue.shift();
          try {
            const result = await fetchWithRetry(url);
            results.push({ url, data: result });
          } catch (error) {
            errors.push({ url, error: error.message });
          }
          await delay(rateLimitMs);
        }
      };
      
      const workers = Array(Math.min(maxConcurrent, urls.length))
        .fill()
        .map(() => worker());
      
      await Promise.all(workers);
      
      return { results, errors };
    };
    
    // Usage
    const urls = [
      'https://api.example.com/data1',
      'https://api.example.com/data2',
      // ... more URLs
    ];
    
    const { results, errors } = await parallelApiHandler(urls);
    console.log('Results:', results);
    console.log('Errors:', errors);`,
        "language": "javascript",
        "category": "API Integration",
        "tags": ["async", "api", "parallel-processing", "error-handling", "rate-limiting"]
      },
      {
        "title": "Advanced Form Validation with Schema",
        "description": "Implements a flexible form validation system using a schema-based approach",
        "code": `const validateForm = (formData, schema) => {
      const errors = {};
      const validationRules = {
        required: (value) => value !== undefined && value !== '',
        minLength: (value, min) => value.length >= min,
        maxLength: (value, max) => value.length <= max,
        pattern: (value, regex) => regex.test(value),
        custom: (value, fn) => fn(value)
      };
    
      Object.entries(schema).forEach(([field, rules]) => {
        const value = formData[field];
        
        Object.entries(rules).forEach(([rule, ruleValue]) => {
          if (validationRules[rule]) {
            const isValid = validationRules[rule](value, ruleValue);
            if (!isValid) {
              errors[field] = errors[field] || [];
              errors[field].push(\`Failed \${rule} validation\`);
            }
          }
        });
      });
    
      return { isValid: Object.keys(errors).length === 0, errors };
    };
    
    // Usage
    const formSchema = {
      username: { required: true, minLength: 3, maxLength: 20 },
      email: { 
        required: true, 
        pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
        custom: (value) => !value.includes('test')
      },
      age: { 
        required: true,
        custom: (value) => !isNaN(value) && parseInt(value) >= 18
      }
    };
    
    const formData = {
      username: 'john_doe',
      email: 'john@example.com',
      age: '25'
    };
    
    const { isValid, errors } = validateForm(formData, formSchema);
    console.log('Is form valid?', isValid);
    console.log('Validation errors:', errors);`,
        "language": "javascript",
        "category": "Form Validation",
        "tags": ["validation", "forms", "schema", "custom-rules"]
      },
      {
        "title": "Advanced Caching Decorator",
        "description": "A decorator that provides advanced caching capabilities for class methods",
        "code": `function advancedCache(options = {}) {
      const {
        ttl = 60000,
        maxSize = 100,
        keyGenerator = (...args) => JSON.stringify(args)
      } = options;
    
      return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        const cache = new Map();
        const expirationTimes = new Map();
    
        descriptor.value = function (...args) {
          const key = keyGenerator(...args);
    
          if (cache.has(key)) {
            const expirationTime = expirationTimes.get(key);
            if (Date.now() < expirationTime) {
              return cache.get(key);
            } else {
              cache.delete(key);
              expirationTimes.delete(key);
            }
          }
    
          const result = originalMethod.apply(this, args);
    
          if (cache.size >= maxSize) {
            const oldestKey = cache.keys().next().value;
            cache.delete(oldestKey);
            expirationTimes.delete(oldestKey);
          }
    
          cache.set(key, result);
          expirationTimes.set(key, Date.now() + ttl);
    
          return result;
        };
    
        return descriptor;
      };
    }
    
    // Usage
    class DataService {
      @advancedCache({ ttl: 30000, maxSize: 50 })
      async fetchUserData(userId) {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { id: userId, name: \`User \${userId}\` };
      }
    }
    
    const service = new DataService();
    
    (async () => {
      console.time('First call');
      await service.fetchUserData(1);
      console.timeEnd('First call');
    
      console.time('Cached call');
      await service.fetchUserData(1);
      console.timeEnd('Cached call');
    })();`,
        "language": "typescript",
        "category": "Performance Optimization",
        "tags": ["caching", "decorator", "typescript", "performance"]
      },
      {
        "title": "Advanced State Machine",
        "description": "Implements a flexible state machine with support for async transitions and hooks",
        "code": `class AdvancedStateMachine {
      constructor(config) {
        this.config = config;
        this.currentState = config.initialState;
        this.context = {};
      }
    
      async transition(event) {
        const currentStateConfig = this.config.states[this.currentState];
        const transition = currentStateConfig.transitions[event];
    
        if (!transition) {
          throw new Error(\`No transition found for event \${event} in state \${this.currentState}\`);
        }
    
        const { target, action, guard } = transition;
    
        if (guard && !await guard(this.context)) {
          console.log(\`Guard prevented transition to \${target}\`);
          return;
        }
    
        const prevState = this.currentState;
    
        // Exit actions
        if (currentStateConfig.exit) {
          await currentStateConfig.exit(this.context);
        }
    
        // Transition action
        if (action) {
          await action(this.context);
        }
    
        this.currentState = target;
    
        // Entry actions
        const nextStateConfig = this.config.states[target];
        if (nextStateConfig.entry) {
          await nextStateConfig.entry(this.context);
        }
    
        console.log(\`Transitioned from \${prevState} to \${this.currentState}\`);
      }
    
      getState() {
        return this.currentState;
      }
    
      setContext(newContext) {
        this.context = { ...this.context, ...newContext };
      }
    }
    
    // Usage
    const trafficLightConfig = {
      initialState: 'red',
      states: {
        red: {
          transitions: {
            NEXT: { target: 'green', action: async (context) => {
              await new Promise(resolve => setTimeout(resolve, 1000));
              console.log('Preparing to switch to green');
            }}
          },
          exit: async () => console.log('Exiting red state')
        },
        yellow: {
          transitions: {
            NEXT: { target: 'red' }
          }
        },
        green: {
          transitions: {
            NEXT: { target: 'yellow' }
          },
          entry: async () => console.log('Entering green state')
        }
      }
    };
    
    const trafficLight = new AdvancedStateMachine(trafficLightConfig);
    
    (async () => {
      console.log(trafficLight.getState()); // 'red'
      await trafficLight.transition('NEXT');
      console.log(trafficLight.getState()); // 'green'
    })();`,
        "language": "javascript",
        "category": "State Management",
        "tags": ["state-machine", "async", "finite-state-machine"]
      },
      {
        "title": "Advanced Web Worker Task Queue",
        "description": "Implements a task queue system using Web Workers for parallel processing",
        "code": `// main.js
    class WorkerTaskQueue {
      constructor(workerScript, numWorkers = navigator.hardwareConcurrency) {
        this.taskQueue = [];
        this.workers = [];
        this.results = [];
        this.numWorkers = numWorkers;
    
        for (let i = 0; i < this.numWorkers; i++) {
          const worker = new Worker(workerScript);
          worker.onmessage = this.handleWorkerMessage.bind(this);
          this.workers.push(worker);
        }
      }
    
      addTask(task) {
        return new Promise((resolve, reject) => {
          this.taskQueue.push({ task, resolve, reject });
          this.processQueue();
        });
      }
    
      processQueue() {
        while (this.taskQueue.length > 0 && this.workers.some(w => !w.busy)) {
          const worker = this.workers.find(w => !w.busy);
          const { task, resolve, reject } = this.taskQueue.shift();
          worker.busy = true;
          worker.currentTask = { resolve, reject };
          worker.postMessage(task);
        }
      }
    
      handleWorkerMessage(event) {
        const { result, error } = event.data;
        const worker = event.target;
        const { resolve, reject } = worker.currentTask;
    
        if (error) {
          reject(new Error(error));
        } else {
          resolve(result);
          this.results.push(result);
        }
    
        worker.busy = false;
        worker.currentTask = null;
        this.processQueue();
      }
    
      terminateAll() {
        this.workers.forEach(worker => worker.terminate());
      }
    }
    
    // Usage
    const queue = new WorkerTaskQueue('worker.js', 4);
    
    for (let i = 0; i < 10; i++) {
      queue.addTask({ type: 'fibonacci', n: 40 + i })
        .then(result => console.log(\`Fibonacci result: \${result}\`))
        .catch(error => console.error(\`Task failed: \${error.message}\`));
    }
    
    // worker.js
    self.onmessage = function(event) {
      const { type, n } = event.data;
      
      if (type === 'fibonacci') {
        try {
          const result = fibonacci(n);
          self.postMessage({ result });
        } catch (error) {
          self.postMessage({ error: error.message });
        }
      }
    };
    
    function fibonacci(n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }`,
        "language": "javascript",
        "category": "Concurrency",
        "tags": ["web-workers", "task-queue", "parallel-processing"]
      },
      {
        "title": "Recursive Directory Tree",
        "description": "A function to generate a tree structure of directories and files",
        "code": "const fs = require('fs');\nconst path = require('path');\n\nfunction directoryTree(dirPath) {\n  const stats = fs.lstatSync(dirPath);\n  const info = {\n    path: dirPath,\n    name: path.basename(dirPath)\n  };\n\n  if (stats.isDirectory()) {\n    info.type = 'folder';\n    info.children = fs.readdirSync(dirPath).map(child => {\n      return directoryTree(path.join(dirPath, child));\n    });\n  } else {\n    info.type = 'file';\n  }\n\n  return info;\n}\n\nconst tree = directoryTree('/path/to/directory');\nconsole.log(JSON.stringify(tree, null, 2));",
        "language": "javascript",
        "category": "File System",
        "tags": ["directory", "tree", "recursive", "file-system"]
      },
      {
        "title": "Custom React Hook: useDarkMode",
        "description": "A custom React hook to implement dark mode functionality",
        "code": "import { useState, useEffect } from 'react';\n\nfunction useDarkMode() {\n  const [isDarkMode, setIsDarkMode] = useState(() => {\n    if (typeof window === 'undefined') return false;\n    return localStorage.getItem('darkMode') === 'true';\n  });\n\n  useEffect(() => {\n    const root = window.document.documentElement;\n    if (isDarkMode) {\n      root.classList.add('dark');\n      localStorage.setItem('darkMode', 'true');\n    } else {\n      root.classList.remove('dark');\n      localStorage.setItem('darkMode', 'false');\n    }\n  }, [isDarkMode]);\n\n  return [isDarkMode, setIsDarkMode];\n}\n\n// Usage\nfunction App() {\n  const [isDarkMode, setIsDarkMode] = useDarkMode();\n\n  return (\n    <div>\n      <button onClick={() => setIsDarkMode(!isDarkMode)}>\n        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode\n      </button>\n    </div>\n  );\n}",
        "language": "javascript",
        "category": "React Hooks",
        "tags": ["react", "hook", "dark-mode", "localStorage"]
      },
      {
        "title": "Fuzzy Search Implementation",
        "description": "A simple fuzzy search algorithm implementation",
        "code": "function fuzzySearch(query, items) {\n  const fuzzy = (str, pattern) => {\n    pattern = pattern.toLowerCase();\n    str = str.toLowerCase();\n    let patternIdx = 0;\n    let strIdx = 0;\n    let match = false;\n\n    while (strIdx < str.length) {\n      if (str[strIdx] === pattern[patternIdx]) {\n        patternIdx += 1;\n      }\n      if (patternIdx === pattern.length) {\n        match = true;\n        break;\n      }\n      strIdx += 1;\n    }\n\n    return match;\n  };\n\n  return items.filter(item => fuzzy(item, query));\n}\n\n// Usage\nconst items = ['apple', 'banana', 'orange', 'pear'];\nconst results = fuzzySearch('ae', items);\nconsole.log(results); // ['apple', 'orange']",
        "language": "javascript",
        "category": "Search Algorithms",
        "tags": ["fuzzy-search", "algorithm", "string-matching"]
      },
      {
        "title": "WebGL 2D Particle System",
        "description": "A simple 2D particle system using WebGL",
        "code": "const canvas = document.createElement('canvas');\nconst gl = canvas.getContext('webgl');\n\nconst vertexShaderSource = `\n  attribute vec2 a_position;\n  attribute vec2 a_velocity;\n  uniform float u_time;\n  void main() {\n    vec2 position = a_position + a_velocity * u_time;\n    gl_Position = vec4(position, 0.0, 1.0);\n    gl_PointSize = 2.0;\n  }\n`;\n\nconst fragmentShaderSource = `\n  precision mediump float;\n  void main() {\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n  }\n`;\n\nfunction createShader(gl, type, source) {\n  const shader = gl.createShader(type);\n  gl.shaderSource(shader, source);\n  gl.compileShader(shader);\n  return shader;\n}\n\nconst vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);\nconst fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);\n\nconst program = gl.createProgram();\ngl.attachShader(program, vertexShader);\ngl.attachShader(program, fragmentShader);\ngl.linkProgram(program);\n\nconst positions = new Float32Array(1000 * 2);\nconst velocities = new Float32Array(1000 * 2);\n\nfor (let i = 0; i < 1000 * 2; i += 2) {\n  positions[i] = Math.random() * 2 - 1;\n  positions[i + 1] = Math.random() * 2 - 1;\n  velocities[i] = Math.random() * 0.01 - 0.005;\n  velocities[i + 1] = Math.random() * 0.01 - 0.005;\n}\n\nconst positionBuffer = gl.createBuffer();\ngl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\ngl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);\n\nconst velocityBuffer = gl.createBuffer();\ngl.bindBuffer(gl.ARRAY_BUFFER, velocityBuffer);\ngl.bufferData(gl.ARRAY_BUFFER, velocities, gl.STATIC_DRAW);\n\nconst positionAttributeLocation = gl.getAttribLocation(program, 'a_position');\nconst velocityAttributeLocation = gl.getAttribLocation(program, 'a_velocity');\nconst timeUniformLocation = gl.getUniformLocation(program, 'u_time');\n\nfunction render(time) {\n  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);\n  gl.clear(gl.COLOR_BUFFER_BIT);\n\n  gl.useProgram(program);\n\n  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n  gl.enableVertexAttribArray(positionAttributeLocation);\n  gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);\n\n  gl.bindBuffer(gl.ARRAY_BUFFER, velocityBuffer);\n  gl.enableVertexAttribArray(velocityAttributeLocation);\n  gl.vertexAttribPointer(velocityAttributeLocation, 2, gl.FLOAT, false, 0, 0);\n\n  gl.uniform1f(timeUniformLocation, time * 0.001);\n\n  gl.drawArrays(gl.POINTS, 0, 1000);\n\n  requestAnimationFrame(render);\n}\n\nrequestAnimationFrame(render);",
        "language": "javascript",
        "category": "Graphics",
        "tags": ["webgl", "particle-system", "animation"]
      },
      {
        "title": "Genetic Algorithm for TSP",
        "description": "A genetic algorithm implementation for solving the Traveling Salesman Problem",
        "code": "class City {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  distanceTo(other) {\n    const dx = this.x - other.x;\n    const dy = this.y - other.y;\n    return Math.sqrt(dx * dx + dy * dy);\n  }\n}\n\nclass Tour {\n  constructor(cities) {\n    this.cities = cities;\n    this.distance = this.calculateDistance();\n  }\n\n  calculateDistance() {\n    let totalDistance = 0;\n    for (let i = 0; i < this.cities.length; i++) {\n      const fromCity = this.cities[i];\n      const toCity = this.cities[(i + 1) % this.cities.length];\n      totalDistance += fromCity.distanceTo(toCity);\n    }\n    return totalDistance;\n  }\n\n  mutate() {\n    const i = Math.floor(Math.random() * this.cities.length);\n    const j = Math.floor(Math.random() * this.cities.length);\n    [this.cities[i], this.cities[j]] = [this.cities[j], this.cities[i]];\n    this.distance = this.calculateDistance();\n  }\n}\n\nclass GeneticAlgorithm {\n  constructor(populationSize, mutationRate, generations) {\n    this.populationSize = populationSize;\n    this.mutationRate = mutationRate;\n    this.generations = generations;\n  }\n\n  solve(cities) {\n    let population = this.initializePopulation(cities);\n\n    for (let gen = 0; gen < this.generations; gen++) {\n      population.sort((a, b) => a.distance - b.distance);\n      const newPopulation = population.slice(0, this.populationSize / 2);\n\n      while (newPopulation.length < this.populationSize) {\n        const parent1 = this.selectParent(population);\n        const parent2 = this.selectParent(population);\n        const child = this.crossover(parent1, parent2);\n        if (Math.random() < this.mutationRate) {\n          child.mutate();\n        }\n        newPopulation.push(child);\n      }\n\n      population = newPopulation;\n    }\n\n    population.sort((a, b) => a.distance - b.distance);\n    return population[0];\n  }\n\n  initializePopulation(cities) {\n    const population = [];\n    for (let i = 0; i < this.populationSize; i++) {\n      const shuffledCities = [...cities].sort(() => Math.random() - 0.5);\n      population.push(new Tour(shuffledCities));\n    }\n    return population;\n  }\n\n  selectParent(population) {\n    const totalFitness = population.reduce((sum, tour) => sum + 1 / tour.distance, 0);\n    let randomValue = Math.random() * totalFitness;\n    for (const tour of population) {\n      randomValue -= 1 / tour.distance;\n      if (randomValue <= 0) {\n        return tour;\n      }\n    }\n    return population[population.length - 1];\n  }\n\n  crossover(parent1, parent2) {\n    const childCities = new Array(parent1.cities.length).fill(null);\n    const startPos = Math.floor(Math.random() * parent1.cities.length);\n    const endPos = Math.floor(Math.random() * parent1.cities.length);\n\n    for (let i = 0; i < childCities.length; i++) {\n      if (startPos < endPos && i > startPos && i < endPos) {\n        childCities[i] = parent1.cities[i];\n      } else if (startPos > endPos) {\n        if (!(i < startPos && i > endPos)) {\n          childCities[i] = parent1.cities[i];\n        }\n      }\n    }\n\n    for (const city of parent2.cities) {\n      if (!childCities.includes(city)) {\n        for (let i = 0; i < childCities.length; i++) {\n          if (childCities[i] === null) {\n            childCities[i] = city;\n            break;\n          }\n        }\n      }\n    }\n\n    return new Tour(childCities);\n  }\n}\n\n// Usage\nconst cities = [\n  new City(60, 200),\n  new City(180, 200),\n  new City(80, 180),\n  new City(140, 180),\n  new City(20, 160),\n  new City(100, 160),\n  new City(200, 160),\n  new City(140, 140),\n  new City(40, 120),\n  new City(100, 120),\n];\n\nconst ga = new GeneticAlgorithm(100, 0.01, 1000);\nconst bestTour = ga.solve(cities);\nconsole.log(`Best tour distance: ${bestTour.distance}`);\nconsole.log('Best tour:', bestTour.cities.map(city => `(${city.x},${city.y})`).join(' -> '));",
        "language": "javascript",
        "category": "Algorithms",
        "tags": ["genetic-algorithm", "optimization", "traveling-salesman"]
      },

    {
        "title": "SvelteKit Server-Side Caching",
        "description": "Implement server-side caching in SvelteKit to improve performance for expensive operations",
        "code": "import { caching } from '$lib/caching';\n\nexport const load = caching(\n  async ({ fetch, params }) => {\n    const response = await fetch(`/api/data/${params.id}`);\n    return response.json();\n  },\n  {\n    key: (event) => `data-${event.params.id}`,\n    ttl: 60 * 5, // 5 minutes\n  }\n);",
        "language": "javascript",
        "category": "SvelteKit",
        "tags": ["sveltekit", "caching", "performance", "server-side"]
      },
      {
        "title": "SvelteKit Dynamic Import for Code Splitting",
        "description": "Implement dynamic imports in SvelteKit for better code splitting and performance",
        "code": "<script>\nimport { onMount } from 'svelte';\nlet LazyComponent;\n\nonMount(async () => {\n  const module = await import('./LazyComponent.svelte');\n  LazyComponent = module.default;\n});\n</script>\n\n{#if LazyComponent}\n  <svelte:component this={LazyComponent} />\n{/if}",
        "language": "svelte",
        "category": "SvelteKit",
        "tags": ["sveltekit", "dynamic-import", "code-splitting", "performance"]
      },
      {
        "title": "PWA Service Worker Registration",
        "description": "Register a service worker for a Progressive Web App",
        "code": "if ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}",
        "language": "javascript",
        "category": "PWA",
        "tags": ["pwa", "service-worker", "web-app", "offline"]
      },
      {
        "title": "PWA Offline Data Sync",
        "description": "Implement offline data synchronization for a Progressive Web App",
        "code": "import { openDB } from 'idb';\n\nconst dbPromise = openDB('myApp', 1, {\n  upgrade(db) {\n    db.createObjectStore('offlineData', { keyPath: 'id' });\n  }\n});\n\nasync function saveOfflineData(data) {\n  const db = await dbPromise;\n  await db.put('offlineData', data);\n}\n\nasync function syncOfflineData() {\n  const db = await dbPromise;\n  const offlineData = await db.getAll('offlineData');\n  \n  for (const item of offlineData) {\n    try {\n      await fetch('/api/sync', {\n        method: 'POST',\n        body: JSON.stringify(item),\n        headers: { 'Content-Type': 'application/json' }\n      });\n      await db.delete('offlineData', item.id);\n    } catch (error) {\n      console.error('Sync failed for item:', item.id);\n    }\n  }\n}\n\n// Call syncOfflineData when online\nwindow.addEventListener('online', syncOfflineData);",
        "language": "javascript",
        "category": "PWA",
        "tags": ["pwa", "offline", "sync", "indexeddb"]
      },
      {
        "title": "TypeScript Discriminated Unions",
        "description": "Use discriminated unions in TypeScript for type-safe handling of different shapes of data",
        "code": "type Circle = {\n  kind: 'circle';\n  radius: number;\n};\n\ntype Rectangle = {\n  kind: 'rectangle';\n  width: number;\n  height: number;\n};\n\ntype Shape = Circle | Rectangle;\n\nfunction getArea(shape: Shape): number {\n  switch (shape.kind) {\n    case 'circle':\n      return Math.PI * shape.radius ** 2;\n    case 'rectangle':\n      return shape.width * shape.height;\n  }\n}\n\nconst myCircle: Shape = { kind: 'circle', radius: 5 };\nconst myRectangle: Shape = { kind: 'rectangle', width: 4, height: 6 };\n\nconsole.log(getArea(myCircle));     // 78.54\nconsole.log(getArea(myRectangle));  // 24",
        "language": "typescript",
        "category": "TypeScript",
        "tags": ["typescript", "discriminated-unions", "type-safety", "pattern-matching"]
      },
      {
        "title": "TypeScript Mapped Types",
        "description": "Use mapped types in TypeScript to create new types based on existing ones",
        "code": "type Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\ntype Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n\ntype Pick<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype ReadonlyUser = Readonly<User>;\ntype PartialUser = Partial<User>;\ntype UserNameAndEmail = Pick<User, 'name' | 'email'>;",
        "language": "typescript",
        "category": "TypeScript",
        "tags": ["typescript", "mapped-types", "type-manipulation", "utility-types"]
      },
      {
        "title": "SvelteKit API Route with TypeScript",
        "description": "Create a strongly-typed API route in SvelteKit using TypeScript",
        "code": "import type { RequestHandler } from '@sveltejs/kit';\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nexport const GET: RequestHandler = async ({ params }) => {\n  const userId = parseInt(params.id);\n  \n  // Fetch user from database (mocked here)\n  const user: User = {\n    id: userId,\n    name: 'John Doe',\n    email: 'john@example.com'\n  };\n\n  return {\n    status: 200,\n    body: JSON.stringify(user)\n  };\n};\n\nexport const POST: RequestHandler = async ({ request }) => {\n  const userData: Omit<User, 'id'> = await request.json();\n  \n  // Save user to database (mocked here)\n  const newUser: User = {\n    ...userData,\n    id: Math.floor(Math.random() * 1000)\n  };\n\n  return {\n    status: 201,\n    body: JSON.stringify(newUser)\n  };\n};",
        "language": "typescript",
        "category": "SvelteKit",
        "tags": ["sveltekit", "typescript", "api-route", "server-side"]
      },
      {
        "title": "PWA Background Sync",
        "description": "Implement background sync in a Progressive Web App for offline data persistence",
        "code": "self.addEventListener('sync', (event) => {\n  if (event.tag === 'sync-messages') {\n    event.waitUntil(syncMessages());\n  }\n});\n\nasync function syncMessages() {\n  try {\n    const db = await openDB('offlineMessages', 1);\n    const messages = await db.getAll('outbox');\n\n    for (const message of messages) {\n      try {\n        await fetch('/api/messages', {\n          method: 'POST',\n          body: JSON.stringify(message),\n          headers: { 'Content-Type': 'application/json' }\n        });\n        await db.delete('outbox', message.id);\n      } catch (err) {\n        console.error('Failed to sync message:', err);\n      }\n    }\n  } catch (err) {\n    console.error('Sync failed:', err);\n  }\n}\n\n// In your main application code\nnavigator.serviceWorker.ready.then((swRegistration) => {\n  return swRegistration.sync.register('sync-messages');\n});",
        "language": "javascript",
        "category": "PWA",
        "tags": ["pwa", "background-sync", "offline", "service-worker"]
      },
      {
        "title": "TypeScript Generic Constraint for Object Keys",
        "description": "Use TypeScript generics with constraints to ensure type safety when working with object keys",
        "code": "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst person = {\n  name: 'Alice',\n  age: 30,\n  city: 'New York'\n};\n\nconst name = getProperty(person, 'name');  // type is string\nconst age = getProperty(person, 'age');    // type is number\n\n// This will cause a compile-time error\n// const invalid = getProperty(person, 'invalid');",
        "language": "typescript",
        "category": "TypeScript",
        "tags": ["typescript", "generics", "type-safety", "object-keys"]
      },
      {
        "title": "SvelteKit Custom Error Handling",
        "description": "Implement custom error handling in SvelteKit for better user experience",
        "code": "// src/hooks.ts\nimport type { Handle, HandleError } from '@sveltejs/kit';\n\nexport const handle: Handle = async ({ event, resolve }) => {\n  try {\n    return await resolve(event);\n  } catch (error) {\n    console.error('Unhandled error:', error);\n    return new Response('Internal Server Error', { status: 500 });\n  }\n};\n\nexport const handleError: HandleError = ({ error, event }) => {\n  console.error('Error caught in handleError:', error);\n  return {\n    message: 'An unexpected error occurred. Please try again later.',\n    code: (error as any).code ?? 'UNKNOWN'\n  };\n};\n\n// src/routes/+error.svelte\n<script lang=\"ts\">\n  import { page } from '$app/stores';\n</script>\n\n<h1>{$page.status}: {$page.error?.message}</h1>\n\n{#if $page.error?.code}\n  <p>Error code: {$page.error.code}</p>\n{/if}\n\n<a href=\"/\">Go back to homepage</a>",
        "language": "typescript",
        "category": "SvelteKit",
        "tags": ["sveltekit", "error-handling", "typescript", "user-experience"]
      },

    {
        "title": "SvelteKit Server-Side API Caching",
        "description": "Implement server-side caching for API responses in SvelteKit to improve performance and reduce unnecessary API calls.",
        "code": "import { json } from '@sveltejs/kit';\nimport type { RequestHandler } from './$types';\n\nconst cache = new Map();\nconst CACHE_DURATION = 60 * 1000; // 1 minute\n\nexport const GET: RequestHandler = async ({ url, fetch }) => {\n  const apiUrl = url.searchParams.get('apiUrl');\n  if (!apiUrl) return json({ error: 'No API URL provided' }, { status: 400 });\n\n  const cachedResponse = cache.get(apiUrl);\n  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_DURATION) {\n    return json(cachedResponse.data);\n  }\n\n  const response = await fetch(apiUrl);\n  const data = await response.json();\n\n  cache.set(apiUrl, { data, timestamp: Date.now() });\n\n  return json(data);\n};",
        "language": "typescript",
        "category": "SvelteKit",
        "tags": ["sveltekit", "caching", "api", "performance"]
      },
      {
        "title": "SvelteKit Dynamic Import with Progress",
        "description": "Implement dynamic imports in SvelteKit with a loading progress indicator for better user experience during code splitting.",
        "code": "<script lang=\"ts\">\nimport { onMount } from 'svelte';\nimport type { ComponentType } from 'svelte';\n\nlet component: ComponentType | null = null;\nlet loadingProgress = 0;\n\nonMount(async () => {\n  const module = await import('./HeavyComponent.svelte');\n  component = module.default;\n});\n\nfunction importWithProgress(path: string): Promise<{ default: ComponentType }> {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement('script');\n    script.src = path;\n    script.async = true;\n\n    script.onload = () => {\n      const module = window.__HEAVY_COMPONENT__;\n      delete window.__HEAVY_COMPONENT__;\n      resolve(module);\n    };\n\n    script.onerror = reject;\n\n    document.body.appendChild(script);\n\n    if ('XMLHttpRequest' in window) {\n      const xhr = new XMLHttpRequest();\n      xhr.open('GET', path, true);\n      xhr.onprogress = (event) => {\n        if (event.lengthComputable) {\n          loadingProgress = (event.loaded / event.total) * 100;\n        }\n      };\n      xhr.send();\n    }\n  });\n}\n</script>\n\n{#if component}\n  <svelte:component this={component} />\n{:else}\n  <div>Loading: {loadingProgress.toFixed(2)}%</div>\n{/if}",
        "language": "svelte",
        "category": "SvelteKit",
        "tags": ["sveltekit", "dynamic-import", "code-splitting", "loading"]
      },
      {
        "title": "PWA Background Sync with IndexedDB",
        "description": "Implement background sync for a Progressive Web App using Service Workers and IndexedDB to ensure data persistence during offline scenarios.",
        "code": "// service-worker.js\nself.addEventListener('sync', (event) => {\n  if (event.tag === 'sync-messages') {\n    event.waitUntil(syncMessages());\n  }\n});\n\nasync function syncMessages() {\n  const db = await openDB('ChatApp', 1, {\n    upgrade(db) {\n      db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });\n    },\n  });\n\n  const messages = await db.getAll('messages');\n  for (const message of messages) {\n    try {\n      const response = await fetch('/api/messages', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(message),\n      });\n      if (response.ok) {\n        await db.delete('messages', message.id);\n      }\n    } catch (error) {\n      console.error('Sync failed:', error);\n    }\n  }\n}\n\n// app.js\nasync function saveMessage(message) {\n  if ('serviceWorker' in navigator && 'SyncManager' in window) {\n    const db = await openDB('ChatApp', 1);\n    await db.add('messages', message);\n    await navigator.serviceWorker.ready;\n    await navigator.serviceWorker.sync.register('sync-messages');\n  } else {\n    // Fallback for browsers that don't support background sync\n    await fetch('/api/messages', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(message),\n    });\n  }\n}",
        "language": "javascript",
        "category": "PWA",
        "tags": ["pwa", "background-sync", "indexeddb", "offline-first"]
      },
      {
        "title": "TypeScript Advanced Mapped Types for API Responses",
        "description": "Create advanced mapped types in TypeScript to automatically generate typed API response interfaces based on endpoint configurations.",
        "code": "type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';\n\ntype Endpoint<T extends string, M extends HTTPMethod, Req, Res> = {\n  path: T;\n  method: M;\n  request: Req;\n  response: Res;\n};\n\ntype APIConfig = {\n  getUser: Endpoint<'/user/:id', 'GET', { id: string }, { name: string; email: string }>;\n  createPost: Endpoint<'/post', 'POST', { title: string; content: string }, { id: string }>;\n  updatePost: Endpoint<'/post/:id', 'PUT', { id: string; title?: string; content?: string }, { success: boolean }>;\n};\n\ntype ExtractPathParams<T extends string> = string extends T\n  ? Record<string, string>\n  : T extends `${infer Start}:${infer Param}/${infer Rest}`\n  ? { [K in Param | keyof ExtractPathParams<Rest>]: string }\n  : T extends `${infer Start}:${infer Param}`\n  ? { [K in Param]: string }\n  : {};\n\ntype APIResponse<T extends keyof APIConfig> = APIConfig[T]['response'];\n\ntype APIRequest<T extends keyof APIConfig> = APIConfig[T]['request'] & ExtractPathParams<APIConfig[T]['path']>;\n\nfunction api<T extends keyof APIConfig>(\n  endpoint: T,\n  data: APIRequest<T>\n): Promise<APIResponse<T>> {\n  const config = (APIConfig as any)[endpoint];\n  let url = config.path;\n  const pathParams = Object.keys(data).filter((key) => url.includes(`:${key}`));\n  \n  pathParams.forEach((param) => {\n    url = url.replace(`:${param}`, data[param]);\n  });\n\n  return fetch(url, {\n    method: config.method,\n    body: JSON.stringify(data),\n    headers: { 'Content-Type': 'application/json' },\n  }).then((res) => res.json());\n}\n\n// Usage\napi('getUser', { id: '123' }).then((user) => console.log(user.name));\napi('createPost', { title: 'Hello', content: 'World' }).then((post) => console.log(post.id));\napi('updatePost', { id: '456', title: 'Updated Title' }).then((result) => console.log(result.success));",
        "language": "typescript",
        "category": "TypeScript",
        "tags": ["typescript", "mapped-types", "api", "type-safety"]
      },
      {
        "title": "SvelteKit SSR-compatible Intersection Observer Store",
        "description": "Create a Svelte store that uses the Intersection Observer API for tracking element visibility, with SSR compatibility.",
        "code": "import { readable } from 'svelte/store';\nimport { browser } from '$app/environment';\n\nexport function createIntersectionObserver(options?: IntersectionObserverInit) {\n  return readable<IntersectionObserverEntry | null>(null, (set) => {\n    if (!browser) return;\n\n    const element = document.createElement('div');\n    const observer = new IntersectionObserver((entries) => {\n      set(entries[0]);\n    }, options);\n\n    observer.observe(element);\n\n    return () => {\n      observer.disconnect();\n    };\n  });\n}\n\n// Usage in a Svelte component\n<script>\nimport { createIntersectionObserver } from './intersectionObserver';\n\nlet elementRef;\nconst intersection = createIntersectionObserver({\n  threshold: 0.5,\n  rootMargin: '0px'\n});\n\n$: isVisible = $intersection?.isIntersecting;\n</script>\n\n<div bind:this={elementRef} use:intersection>\n  {#if isVisible}\n    <p>This content is visible!</p>\n  {/if}\n</div>",
        "language": "svelte",
        "category": "SvelteKit",
        "tags": ["sveltekit", "intersection-observer", "svelte-store", "ssr"]
      },

    {
        "title": "SvelteKit Server-Side Form Validation",
        "description": "Implement server-side form validation in SvelteKit using Zod schema",
        "code": "import { z } from 'zod';\nimport type { Actions } from './$types';\n\nconst schema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8)\n});\n\nexport const actions: Actions = {\n  default: async ({ request }) => {\n    const formData = await request.formData();\n    const data = Object.fromEntries(formData);\n\n    try {\n      const validatedData = schema.parse(data);\n      // Process valid data\n      return { success: true };\n    } catch (error) {\n      return { errors: error.errors };\n    }\n  }\n};",
        "language": "typescript",
        "category": "SvelteKit",
        "tags": ["sveltekit", "form-validation", "zod", "server-side"]
      },
      {
        "title": "PWA Push Notification Subscription",
        "description": "Subscribe to push notifications in a Progressive Web App",
        "code": "async function subscribeToPushNotifications() {\n  if ('serviceWorker' in navigator && 'PushManager' in window) {\n    try {\n      const registration = await navigator.serviceWorker.ready;\n      const subscription = await registration.pushManager.subscribe({\n        userVisibleOnly: true,\n        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)\n      });\n      \n      // Send subscription to server\n      await fetch('/api/subscribe', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(subscription)\n      });\n\n      console.log('Push notification subscription successful');\n    } catch (error) {\n      console.error('Failed to subscribe to push notifications:', error);\n    }\n  }\n}\n\nfunction urlBase64ToUint8Array(base64String) {\n  const padding = '='.repeat((4 - base64String.length % 4) % 4);\n  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');\n  const rawData = window.atob(base64);\n  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));\n}",
        "language": "javascript",
        "category": "Progressive Web App",
        "tags": ["pwa", "push-notifications", "service-worker"]
      },
      {
        "title": "TypeScript Conditional Types for API Responses",
        "description": "Use conditional types to create type-safe API response handlers",
        "code": "type ApiResponse<T> =\n  | { status: 'success'; data: T }\n  | { status: 'error'; error: string };\n\ntype UnwrapApiResponse<T> = T extends ApiResponse<infer U> ? U : never;\n\nasync function fetchData<T>(url: string): Promise<ApiResponse<T>> {\n  const response = await fetch(url);\n  if (!response.ok) {\n    return { status: 'error', error: 'Failed to fetch data' };\n  }\n  const data: T = await response.json();\n  return { status: 'success', data };\n}\n\nfunction handleApiResponse<T>(response: ApiResponse<T>): UnwrapApiResponse<ApiResponse<T>> {\n  if (response.status === 'success') {\n    return response.data;\n  } else {\n    throw new Error(response.error);\n  }\n}\n\n// Usage\ninterface User { id: number; name: string; }\n\nasync function getUser(id: number) {\n  const response = await fetchData<User>(`/api/users/${id}`);\n  const user = handleApiResponse(response);\n  console.log(user.name); // TypeScript knows 'user' is of type 'User'\n}",
        "language": "typescript",
        "category": "TypeScript",
        "tags": ["typescript", "conditional-types", "api", "error-handling"]
      },
      {
        "title": "SvelteKit Dynamic Module Federation",
        "description": "Implement dynamic module federation in SvelteKit for micro-frontends",
        "code": "// vite.config.js\nimport { sveltekit } from '@sveltejs/kit/vite';\nimport { defineConfig } from 'vite';\nimport federation from '@originjs/vite-plugin-federation';\n\nexport default defineConfig({\n  plugins: [\n    sveltekit(),\n    federation({\n      name: 'host-app',\n      remotes: {\n        remoteApp: 'http://localhost:5001/remoteEntry.js',\n      },\n      shared: ['svelte']\n    })\n  ]\n});\n\n// src/routes/+page.svelte\n<script lang=\"ts\">\nimport { onMount } from 'svelte';\n\nlet RemoteComponent: any;\n\nonMount(async () => {\n  const module = await import('remoteApp/Component');\n  RemoteComponent = module.default;\n});\n</script>\n\n{#if RemoteComponent}\n  <svelte:component this={RemoteComponent} />\n{/if}",
        "language": "typescript",
        "category": "SvelteKit",
        "tags": ["sveltekit", "module-federation", "micro-frontends", "vite"]
      },
      {
        "title": "PWA Offline-First Data Sync",
        "description": "Implement offline-first data synchronization in a Progressive Web App",
        "code": "import { openDB, DBSchema, IDBPDatabase } from 'idb';\n\ninterface MyDB extends DBSchema {\n  'offline-queue': {\n    key: string;\n    value: {\n      url: string;\n      method: string;\n      body: any;\n      timestamp: number;\n    };\n  };\n}\n\nclass OfflineSync {\n  private db: IDBPDatabase<MyDB>;\n\n  constructor() {\n    this.initDB();\n  }\n\n  private async initDB() {\n    this.db = await openDB<MyDB>('offline-sync-db', 1, {\n      upgrade(db) {\n        db.createObjectStore('offline-queue', { keyPath: 'timestamp' });\n      },\n    });\n  }\n\n  async addToQueue(request: Request) {\n    const timestamp = Date.now();\n    await this.db.add('offline-queue', {\n      url: request.url,\n      method: request.method,\n      body: await request.clone().text(),\n      timestamp,\n    });\n  }\n\n  async processQueue() {\n    const tx = this.db.transaction('offline-queue', 'readwrite');\n    const store = tx.objectStore('offline-queue');\n    const requests = await store.getAll();\n\n    for (const req of requests) {\n      try {\n        const response = await fetch(req.url, {\n          method: req.method,\n          body: req.body,\n          headers: { 'Content-Type': 'application/json' },\n        });\n\n        if (response.ok) {\n          await store.delete(req.timestamp);\n        }\n      } catch (error) {\n        console.error('Failed to process offline request:', error);\n      }\n    }\n\n    await tx.done;\n  }\n}\n\n// Usage\nconst offlineSync = new OfflineSync();\n\nself.addEventListener('fetch', (event: FetchEvent) => {\n  if (!navigator.onLine) {\n    event.respondWith(\n      (async () => {\n        await offlineSync.addToQueue(event.request.clone());\n        return new Response('Offline mode: Request queued for sync', { status: 503 });\n      })()\n    );\n  }\n});\n\nself.addEventListener('online', () => {\n  offlineSync.processQueue();\n});",
        "language": "typescript",
        "category": "Progressive Web App",
        "tags": ["pwa", "offline-first", "indexeddb", "data-sync"]
      },
      {
        "title": "TypeScript Advanced Mapped Types for API Schemas",
        "description": "Use advanced mapped types to create type-safe API schemas",
        "code": "type Primitive = string | number | boolean | null;\n\ntype Schema = {\n  [key: string]: {\n    type: 'string' | 'number' | 'boolean' | 'null' | 'object' | 'array';\n    required?: boolean;\n    properties?: Schema;\n    items?: Schema[keyof Schema];\n  };\n};\n\ntype InferType<T> = T extends { type: 'string' } ? string :\n  T extends { type: 'number' } ? number :\n  T extends { type: 'boolean' } ? boolean :\n  T extends { type: 'null' } ? null :\n  T extends { type: 'object', properties: infer P } ? { [K in keyof P]: InferType<P[K]> } :\n  T extends { type: 'array', items: infer I } ? InferType<I>[] :\n  never;\n\ntype SchemaToType<S extends Schema> = {\n  [K in keyof S as S[K]['required'] extends true ? K : never]: InferType<S[K]>\n} & {\n  [K in keyof S as S[K]['required'] extends true ? never : K]?: InferType<S[K]>\n};\n\n// Example usage\nconst userSchema = {\n  id: { type: 'number', required: true },\n  name: { type: 'string', required: true },\n  email: { type: 'string', required: true },\n  age: { type: 'number' },\n  address: {\n    type: 'object',\n    properties: {\n      street: { type: 'string' },\n      city: { type: 'string' },\n      country: { type: 'string' }\n    }\n  },\n  hobbies: { type: 'array', items: { type: 'string' } }\n} as const;\n\ntype User = SchemaToType<typeof userSchema>;\n\n// TypeScript will infer the correct type for 'user'\nconst user: User = {\n  id: 1,\n  name: 'John Doe',\n  email: 'john@example.com',\n  age: 30,\n  address: {\n    street: '123 Main St',\n    city: 'Anytown',\n    country: 'USA'\n  },\n  hobbies: ['reading', 'cycling']\n};",
        "language": "typescript",
        "category": "TypeScript",
        "tags": ["typescript", "mapped-types", "api-schema", "type-inference"]
      },
      {
        "title": "SvelteKit Custom Authentication Store",
        "description": "Implement a custom authentication store with SvelteKit",
        "code": "// src/lib/stores/auth.ts\nimport { writable } from 'svelte/store';\nimport type { Writable } from 'svelte/store';\n\ninterface User {\n  id: string;\n  email: string;\n  name: string;\n}\n\ninterface AuthStore {\n  user: Writable<User | null>;\n  isAuthenticated: Writable<boolean>;\n  login: (email: string, password: string) => Promise<void>;\n  logout: () => Promise<void>;\n  checkAuth: () => Promise<void>;\n}\n\nfunction createAuthStore(): AuthStore {\n  const user = writable<User | null>(null);\n  const isAuthenticated = writable<boolean>(false);\n\n  async function login(email: string, password: string) {\n    try {\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ email, password }),\n      });\n\n      if (!response.ok) throw new Error('Login failed');\n\n      const userData: User = await response.json();\n      user.set(userData);\n      isAuthenticated.set(true);\n    } catch (error) {\n      console.error('Login error:', error);\n      throw error;\n    }\n  }\n\n  async function logout() {\n    try {\n      await fetch('/api/logout', { method: 'POST' });\n      user.set(null);\n      isAuthenticated.set(false);\n    } catch (error) {\n      console.error('Logout error:', error);\n    }\n  }\n\n  async function checkAuth() {\n    try {\n      const response = await fetch('/api/check-auth');\n      if (response.ok) {\n        const userData: User = await response.json();\n        user.set(userData);\n        isAuthenticated.set(true);\n      } else {\n        user.set(null);\n        isAuthenticated.set(false);\n      }\n    } catch (error) {\n      console.error('Auth check error:', error);\n      user.set(null);\n      isAuthenticated.set(false);\n    }\n  }\n\n  return {\n    user,\n    isAuthenticated,\n    login,\n    logout,\n    checkAuth,\n  };\n}\n\nexport const auth = createAuthStore();\n\n// Usage in a Svelte component\n<script lang=\"ts\">\nimport { auth } from '$lib/stores/auth';\n\nlet email = '';\nlet password = '';\n\nasync function handleLogin() {\n  try {\n    await auth.login(email, password);\n  } catch (error) {\n    console.error('Login failed:', error);\n  }\n}\n</script>\n\n{#if $auth.isAuthenticated}\n  <p>Welcome, {$auth.user?.name}!</p>\n  <button on:click={auth.logout}>Logout</button>\n{:else}\n  <form on:submit|preventDefault={handleLogin}>\n    <input type=\"email\" bind:value={email} required />\n    <input type=\"password\" bind:value={password} required />\n    <button type=\"submit\">Login</button>\n  </form>\n{/if}",
        "language": "typescript",
        "category": "SvelteKit",
        "tags": ["sveltekit", "authentication", "store", "typescript"]
      },

    {
        "title": "Promise Pool Executor",
        "description": "Executes a list of async tasks in a controlled concurrency manner to prevent overwhelming the system.",
        "code": "async function promisePool(tasks, poolLimit) {\n  const results = [];\n  const executing = [];\n\n  for (const task of tasks) {\n    const promise = task().then(result => results.push(result));\n    executing.push(promise);\n    if (executing.length >= poolLimit) {\n      await Promise.race(executing);\n      executing.splice(executing.findIndex(p => p === promise), 1);\n    }\n  }\n  await Promise.all(executing);\n  return results;\n}\n\n// Usage\nconst tasks = Array.from({ length: 10 }, (_, i) => () => fetch(`https://jsonplaceholder.typicode.com/todos/${i + 1}`));\npromisePool(tasks, 3).then(console.log);",
        "language": "javascript",
        "category": "Concurrency",
        "tags": ["javascript", "promise", "concurrency", "async"]
      },
      {
        "title": "Function Rate Limiter",
        "description": "Rate limits a function to execute a maximum number of times per given interval.",
        "code": "function rateLimiter(fn, limit, interval) {\n  let calls = 0;\n  let queue = [];\n\n  function processQueue() {\n    if (queue.length === 0 || calls >= limit) return;\n    calls++;\n    const [resolve, context, args] = queue.shift();\n    resolve(fn.apply(context, args));\n    setTimeout(() => {\n      calls--;\n      processQueue();\n    }, interval);\n  }\n\n  return function (...args) {\n    return new Promise(resolve => {\n      queue.push([resolve, this, args]);\n      processQueue();\n    });\n  };\n}\n\n// Usage\nconst limitedFunc = rateLimiter(console.log, 2, 1000);\nlimitedFunc('Call 1');\nlimitedFunc('Call 2');\nlimitedFunc('Call 3');",
        "language": "javascript",
        "category": "Concurrency",
        "tags": ["javascript", "rate limit", "throttle", "function control"]
      },
      {
        "title": "Hex to RGB Converter",
        "description": "Converts a HEX color string to its RGB equivalent.",
        "code": "function hexToRgb(hex) {\n  let result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n  return result ? {\n    r: parseInt(result[1], 16),\n    g: parseInt(result[2], 16),\n    b: parseInt(result[3], 16)\n  } : null;\n}\n\n// Usage\nconsole.log(hexToRgb('#ff6347')); // { r: 255, g: 99, b: 71 }",
        "language": "javascript",
        "category": "Color Utilities",
        "tags": ["javascript", "hex", "rgb", "color conversion"]
      },
      {
        "title": "Object Deep Freeze",
        "description": "Recursively freezes an object, preventing any modification to it or its nested objects.",
        "code": "function deepFreeze(obj) {\n  Object.freeze(obj);\n\n  Object.keys(obj).forEach(key => {\n    if (\n      obj[key] !== null &&\n      (typeof obj[key] === 'object' || typeof obj[key] === 'function') &&\n      !Object.isFrozen(obj[key])\n    ) {\n      deepFreeze(obj[key]);\n    }\n  });\n\n  return obj;\n}\n\n// Usage\nconst obj = deepFreeze({ a: { b: { c: 1 } } });\nobj.a.b.c = 2; // No effect\nconsole.log(obj);",
        "language": "javascript",
        "category": "Object Utilities",
        "tags": ["javascript", "object", "freeze", "immutable"]
      },
      {
        "title": "Generate Unique ID",
        "description": "Generates a unique identifier using the current timestamp and random values.",
        "code": "function generateUniqueId() {\n  return (\n    Date.now().toString(36) +\n    Math.random().toString(36).substring(2, 10)\n  ).toUpperCase();\n}\n\n// Usage\nconsole.log(generateUniqueId()); // Example output: 'K4YZ9D47LR'",
        "language": "javascript",
        "category": "Utilities",
        "tags": ["javascript", "unique id", "utility", "identifier"]
      },
      {
        "title": "URL Query String to Object",
        "description": "Converts a URL query string into an object for easy access to parameters.",
        "code": "function queryStringToObject(query) {\n  return query\n    .substring(1)\n    .split('&')\n    .reduce((acc, param) => {\n      let [key, value] = param.split('=');\n      acc[decodeURIComponent(key)] = decodeURIComponent(value);\n      return acc;\n    }, {});\n}\n\n// Usage\nconsole.log(queryStringToObject('?name=John&age=30')); // { name: 'John', age: '30' }",
        "language": "javascript",
        "category": "String Utilities",
        "tags": ["javascript", "url", "query string", "object"]
      },
      {
        "title": "Deep Merge Objects",
        "description": "Merges two or more objects deeply, combining their properties recursively.",
        "code": "function deepMerge(...objects) {\n  const isObject = obj => obj && typeof obj === 'object';\n  return objects.reduce((prev, obj) => {\n    Object.keys(obj).forEach(key => {\n      const pVal = prev[key];\n      const oVal = obj[key];\n      if (Array.isArray(pVal) && Array.isArray(oVal)) {\n        prev[key] = pVal.concat(...oVal);\n      } else if (isObject(pVal) && isObject(oVal)) {\n        prev[key] = deepMerge(pVal, oVal);\n      } else {\n        prev[key] = oVal;\n      }\n    });\n    return prev;\n  }, {});\n}\n\n// Usage\nconst obj1 = { a: { b: 1 } };\nconst obj2 = { a: { c: 2 } };\nconsole.log(deepMerge(obj1, obj2)); // { a: { b: 1, c: 2 } }",
        "language": "javascript",
        "category": "Object Utilities",
        "tags": ["javascript", "merge", "object", "deep merge"]
      },
      {
        "title": "DOM Element Selector",
        "description": "Selects DOM elements matching a CSS selector with an optional context.",
        "code": "function select(selector, context = document) {\n  return Array.from(context.querySelectorAll(selector));\n}\n\n// Usage\nconst buttons = select('button');\nconsole.log(buttons); // List of button elements in the DOM",
        "language": "javascript",
        "category": "DOM Manipulation",
        "tags": ["javascript", "dom", "selector", "query"]
      },
      {
        "title": "Escape HTML Entities",
        "description": "Escapes HTML entities in a string to prevent XSS vulnerabilities.",
        "code": "function escapeHtml(str) {\n  const map = {\n    '&': '&amp;',\n    '<': '&lt;',\n    '>': '&gt;',\n    '\"': '&quot;',\n    \"'\": '&#039;'\n  };\n  return str.replace(/[&<>\"]/g, m => map[m]);\n}\n\n// Usage\nconsole.log(escapeHtml('<div>Hello & welcome</div>')); // '&lt;div&gt;Hello &amp; welcome&lt;/div&gt;'",
        "language": "javascript",
        "category": "String Utilities",
        "tags": ["javascript", "html", "escape", "security"]
      },
      {
        "title": "Sleep Function",
        "description": "Pauses code execution for a specified amount of time, useful in async functions.",
        "code": "function sleep(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\n// Usage\nasync function demo() {\n  console.log('Start');\n  await sleep(1000);\n  console.log('End after 1 second');\n}\ndemo();",
        "language": "javascript",
        "category": "Utilities",
        "tags": ["javascript", "async", "sleep", "timer"]
      }
  ]

  const titles = arr.map(a => a.title)

  console.log(titles);
  