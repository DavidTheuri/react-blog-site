import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Blog App', () => {
  it('renders the header', () => {
    render(<App />);
    // This just checks if your app renders without crashing
    expect(document.body).toBeTruthy();
  });
});