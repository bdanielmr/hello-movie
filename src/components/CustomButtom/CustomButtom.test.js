/* eslint-disable no-undef */
import { render, waitFor } from '@testing-library/react';

import CustomButtom from './CustomButtom';

it('renders custom props to component custom buttom', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<CustomButtom label="custom buttom" />);
  await waitFor(() => getByText(/custom buttom/i));
});
