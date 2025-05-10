import { cn } from '~/lib/utils';

interface LoadingProps {
  onLogin?: boolean;
}

const Loading = ({ onLogin }: LoadingProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-1001 flex items-center justify-center',
        onLogin ? 'bg-white' : 'bg-black/60'
      )}
    >
      <div className='flex-col gap-4 w-full flex items-center justify-center'>
        <div className='w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-white rounded-full'>
          <div className='w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-[#E43F43] rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
