

type Props = {
    type: 'FREE' | 'PRO'
    children: React.ReactNode
  }


export default function SubscriptionPlan({type,children}:Props){
    return (
        <div>
            {children}
        </div>
    )
}