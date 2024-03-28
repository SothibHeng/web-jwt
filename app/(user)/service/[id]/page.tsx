import CardComponent from "@/components/card/CardProductDetail";

type PropsParams = {
	params: {
		id: number;
	};
	searchParams: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: number) => {
	const res = await fetch(`${ENDPOINT}${id}`);
	const data = await res.json();
	console.log(data);
	return data;
};

export default async function Detail(props: PropsParams) {
	let data = await getData(props.params.id);

	return (
		<div className="h-screen grid place-content-center">
			<CardComponent
				title={data?.title || "NoTitle"}
				description={data?.description || "No Description"}
				image={
					data?.image ||
					"https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
				}
			/>
		</div>
	);
}
