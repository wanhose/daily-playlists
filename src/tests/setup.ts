import '@testing-library/jest-dom/vitest';
import 'tests/mocks/@tanstack/react-query';
import 'tests/mocks/react-router-dom';

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => cleanup());
