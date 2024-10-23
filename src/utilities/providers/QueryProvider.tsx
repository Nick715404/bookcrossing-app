import {
	QueryClient,
	QueryClientConfig,
	QueryClientProvider,
} from 'react-query';

interface QueryProviderProps {
	children: React.ReactNode;
}

const defaultOptions: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 1000,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
};

const client = new QueryClient(defaultOptions);

export const QueryProvider = ({ children }: QueryProviderProps) => {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
