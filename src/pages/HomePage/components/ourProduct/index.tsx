import React, { useState } from 'react';
import { getProductRecommendAsync } from '../../../../apis/product/getproductrecommend.api';
import { IBook } from '../../../../bussiness/book';
import CardProduct from '../../../../components/CardProduct';

interface Props {}

const data = [
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: ['https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-6ceb543/wp-content/uploads/2022/09/iPhone14pro-ShopDunk-space-black.png'],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: [],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: [],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: [],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: [],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	},
	{
		id: 'congchien',
		name: 'iPhone 14 Pro Max',
		createDate: new Date(),
		author: 'Cong Chien',
		publishers: {
			name: 'Neymar JR',
			date: new Date(),
		},
		description: {
			language: 'VietNam',
			description: 'Haha',
		},
		price: {
			price: 40000000,
			currency: 'VND',
		},
		image_URLs: [],
		quantity: 5,
		sold: 10,
		bookLockNumber: 2,
		discount: 10,
		fallIntoCategories: {
			id: '321',
			name: 'Football',
		},
		enable: true,
	}
]
const OurProduct = (props: Props) => {
	const [list, setList] = useState<IBook[]>([]);

	React.useEffect(() => {
		const getData = async () => {
			const result = await getProductRecommendAsync({ size: 10 });
			const { data } = result;
			console.log('getProductRecommendAsync', data.content);

			setList(data.content);
		};
		getData();
	}, []);
	return (
		<section className='ftco-section'>
			<div className='container'>
				<div className='row justify-content-center mb-3 pb-3'>
					<div
						className='
							col-md-12
							heading-section
							text-center
							ftco-animate
						'
					>
						<span className='subheading'>S??ch n???i b???t</span>
						<h2 className='mb-4'>Danh m???c</h2>
						<p>
						"T???t c??? nh???ng g?? con ng?????i l??m, ngh?? ho???c tr??? th??nh ???????c b???o t???n m???t c??ch k??? di???u tr??n nh???ng trang s??ch". [Thomas Carlyle]
						</p>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					{data.length > 0 && data.map((e: any, i: number) => (
						<div className='col-md-6 col-lg-3 ftco-animate' key={i}>
							<CardProduct book={e} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurProduct;
