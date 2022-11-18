import { Box, Title, Center, Grid } from '@mantine/core';
import { AuthenticationForm } from './AuthenticationForm';

const RegisterHost = () => {
	return (
		<div>
			<Box sx={{ maxWidth: 1000 }} mx='auto'>
				<Center>
					<AuthenticationForm />
				</Center>
			</Box>
		</div>
	);
};
export default RegisterHost;
