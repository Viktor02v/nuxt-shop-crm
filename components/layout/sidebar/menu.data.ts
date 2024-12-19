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
		icon:'icons8:plus',
		url:'/creation',
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
	}
]