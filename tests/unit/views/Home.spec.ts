import { Home } from '@/views';
import '@testing-library/jest-dom';
import { renderComponent } from '../testing-utils';

describe('Home', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('should have a greeting', () => {
    const { queryByText } = renderComponent(Home);

    expect(queryByText('I\'m Benjamin,'))
      .toBeInTheDocument();
  });

  it('should have a github, linkedin & blog link', () => {
    const { queryByTestId } = renderComponent(Home);

    expect(queryByTestId('link-github')).toBeInTheDocument();
    expect(queryByTestId('link-linkedin')).toBeInTheDocument();
    expect(queryByTestId('link-strava')).toBeInTheDocument();
  });

  it('should have a link to the disclaimer', async () => {
    const { queryByRole } = renderComponent(Home);
    const link = queryByRole('link', { name: 'Disclaimer' });

    expect(link).toBeInTheDocument();
    expect((link as HTMLLinkElement).href).toMatch(/disclaimer/i);
  });
});
