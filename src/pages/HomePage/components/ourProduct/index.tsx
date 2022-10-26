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
						<span className='subheading'>Sách nổi bật</span>
						<h2 className='mb-4'>Danh mục</h2>
						<p>
						"Tất cả những gì con người làm, nghĩ hoặc trở thành được bảo tồn một cách kỳ diệu trên những trang sách". [Thomas Carlyle]
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
