### React Recoli App

- Recoil Root  
  Recoil 상태를 사용하는 컴포넌트는 부모 트리 어디가에 나타나는 RecoliRoot가 필요합니다. 루트 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 방법입니다.  
  ```javascript
  import { RecoilRoot } from 'recoil';
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RecoilRoot >
      <App />
      </RecoilRoot>
    </React.StrictMode>
  );
  ```  
- Atom  
  Atom은 상태(state)의 일부를 나타냅니다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있습니다. Atom의 값을 읽는 컴포넌트들은 암묵적으로 Atom을 구독합니다. 그래서 Atom에 어떤 변화가 있으면 그 Atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생할 것입니다.  

- Selector  
  Selector는 Atom 혹은 다른 Selector상태를 입력받아 동적인 데이터를 반환하는 순수 함수 입니다. Selector가 참조하던 다른 상태가 변경되면 이도 같이 업데이트 되며, 이때 Selector를 바라보던 컴포넌트들이 리 렌더링 되는 것입니다.

#### npm installs
```bash
  $ npm install recoil
```

#### Error Note
- 노드17 에서 발생하는 문제  
  ```bash
    opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],        
    library: 'digital envelope routines',
    reason: 'unsupported',
    code: 'ERR_OSSL_EVP_UNSUPPORTED'
  ```
  해결방법 : https://zinee-world.tistory.com/614