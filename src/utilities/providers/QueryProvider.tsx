import { QueryClient, QueryClientProvider } from "react-query";

interface IProps { children: React.ReactNode }

const defaultOptions = {
  queries: {
    staleTime: 1000 * 6
  },
}

const client = new QueryClient({ defaultOptions });

const QueryProvider = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
};

export { QueryProvider };