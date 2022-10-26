import React, { useState } from 'react';
import { getListCategoryName } from '../../../../apis/category/listCategoryName';
import { ICategoryName } from '../../../../bussiness/category';

interface IProps {
	onClick: (id?: string) => void;
	currentId: string;
}

const ShopFilter = (props: IProps) => {
	const [list, setList] = useState<ICategoryName[]>([]);
	const [active, setActive] = useState<string>(props.currentId);

	React.useEffect(() => {
		getData();
	  }, []);

	const getData = async () => {
		const rs = await getListCategoryName();
		const { data } = rs;
		setList(data || []);
	}

	const getCategory = (id: string) => {
		setActive(id);
		props.onClick(id === 'all' ? undefined : id)
	}

	return (
		<div className='row justify-content-center'>
			<div className='col-md-10 mb-5 text-center'>
				<ul className='product-category'>
					<li>
						<a 
							onClick={() => getCategory('all')}
							className={active === 'all' ? 'active' : ''}
							style={{ 
								margin: "0 5px 10px 0", 
								cursor: "pointer",
								border: '1px solid gray',
								borderRadius: '5px',
							}}
						>
							All
						</a>
					</li>
					{list && list.map((elm: ICategoryName, idx: number) => (
						<li key={idx} 
							style={{ 
								margin: "0 5px 10px 0", 
								cursor: "pointer",
								border: '1px solid gray',
								borderRadius: '5px',
							}}
						>
							<a 
								onClick={() => getCategory(elm.id)} 
								className={active === elm.id ? 'active' : ''}
							>
								{elm.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ShopFilter;
