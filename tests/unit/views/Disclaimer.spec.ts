import { Disclaimer } from '@/views';
import '@testing-library/jest-dom';
import { renderComponent } from '../testing-utils';

const TITLE = 'Disclaimer for Benjamin Macher';

describe('Disclaimer', () => {
  it('should be defined', () => {
    expect(Disclaimer).toBeDefined();
  });

  it(`should have the title "${TITLE}"`, () => {
    const { queryByRole } = renderComponent(Disclaimer);

    expect(queryByRole('heading', { name: TITLE }))
      .toBeInTheDocument();
  });

  it('should have a button back to home', () => {
    const { queryByRole } = renderComponent(Disclaimer);
    const button = queryByRole('button', { name: /back to home/i });

    expect(button).toBeInTheDocument();
  });
});
