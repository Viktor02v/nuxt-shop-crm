export interface MenuData {
	icon:string,
	url:string,
}

export const MENU_DATA:MenuData[] = [
	{
		icon:'radix-icons:dashboard',
		url:'/',
	},
	{
		icon:'fluent:receipt-28-regular',
		url:'/collection',
	}, 
	{
		icon: 'line-md:heart',
		url:'/favorites'
	},
	{
		icon: 'solar:cart-linear',
		url:'/cart'
	},
	{
		icon:'ep:goods',
		url:'/orders',
	},
	{
		icon:'ph:contactless-payment',
		url:'/payments',
	},
	{
		icon: 'radix-icons:gear',
		url:'/settings'
	},
	{
		icon: 'radix-icons:question-mark',
		url:'/help'
	},
	{
		icon: 'bx:log-out-circle',
		url:'/login'
	}
	
]