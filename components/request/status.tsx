import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx'

export default function RequestStatus({ status }: {status: string}) {
    return (
        <span className={clsx(
            'inline-flex items-center rounded-full px-2 py-1 text-sm',
            {
                'bg-gray-100 text-gray-800': status === 'por aprobar',
                'bg-green-500 text-white': status === 'aprobado',
            }
        )}
        >
            {status === 'por aprobar' ? (
        <>
          Por aprobar
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'aprobado' ? (
        <>
          Aprobado
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
    )
}