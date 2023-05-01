import { render, screen } from '@testing-library/react';

import GifGridItem from 'components/GifGridItem';

const setup = props => render(<GifGridItem {...props} />);

describe('<GifGridItem />', () => {
  const title = 'Gif Grid Item Title';
  const url = 'https://localtest.me/something.gif';

  beforeEach(() => {
    setup({ title, url });
  });

  it('should render', () => {
    const pTitle = screen.getByText(title);
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(pTitle).toBeInTheDocument();

    expect(img.alt).toBe(title);
    expect(img.src).toBe(url);
  });

  it('should have animation', () => {
    const card = screen.getAllByRole('generic')[1];
    expect(card).toBeInTheDocument();

    expect(card.classList).toContain('card');
    expect(card.classList).toContain('animate__animated');
    expect(card.classList).toContain('animate__fadeIn');
  });
});
