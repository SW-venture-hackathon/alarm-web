module.exports = {
  env: {
    browser: true,
    es2021: true, // ECMAScript 2021(ES12) 문법 사용
    node: true, // Node.js 환경 지원
  },
  extends: [
    'eslint:recommended', // 기본 ESLint 권장 규칙 사용
    'plugin:react/recommended', // React 관련 ESLint 규칙 사용
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Prettier와 ESLint 통합, 포매팅 규칙 적용
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 문법 지원
    },
    ecmaVersion: 12, // ECMAScript 버전 설정
    sourceType: 'module', // ES 모듈을 사용
  },
  plugins: [
    'react', // React 관련 ESLint 플러그인
    'react-hooks',
    'prettier',
    'unused-imports',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17 이상에서는 불필요한 규칙
    'react/jsx-uses-react': 'off', // React 17+에서는 불필요
    // 컴포넌트를 화살표 함수로 작성하도록 강제
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-console': 'off', // console.log 허용
    //'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 추가적인 규칙을 설정할 수 있음
    'prettier/prettier': ['error'], // Prettier 규칙을 ESLint에서 에러로 표시
    'comma-dangle': ['error', 'only-multiline'], // 여러 줄에서만 쉼표 허용

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^React$', // React는 사용하지 않아도 허용 (React 17+)
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전 자동 감지
    },
  },
};
