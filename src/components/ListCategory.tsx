import CardCategory from "./ui/CardCategory";
import { Tag } from "./ui/Buttons";
import dataCategories from "../data/listCardCategory.json";
import useWindowWidth from "../hooks/useWindowWidth";

interface CategoryType {
    id: number;
    nameImage: string;
    nameCategory: string;
    totalViewers: number;
    tags: string[];
}
const categories: CategoryType[] = dataCategories.listCardCategory;

export default function ListCategory() {

    function TotalViewer(number: number) {
        const num = number;
        if (num >= 1000000) {
            return (num/1000000).toFixed(1).concat("M");
        } else if(num >= 1000) {
            return (num/1000).toFixed(1).concat("k");
        }
        return num.toString();
    }

    const cards = [];
    const widthScreen = useWindowWidth();

    for (let i = 1; i < categories.length; i++) {
        const category = categories[i];

        if ( widthScreen < 1520 && i <= 5) {
            cards.push(
            <CardCategory
                key={category.id}
                NameImage={category.nameImage}
                NameCategory={category.nameCategory}
                TotalViewers={TotalViewer(category.totalViewers)}
            >
                <div className="flex flex-row gap-2 line-clamp-1">
                {category.tags.map(tag => (
                    <Tag key={tag} text={tag} />
                ))}
                </div>
            </CardCategory>
            );
            if( i == 5){
                break;
            }
        } else{
            cards.push(
                <CardCategory
                    key={category.id}
                    NameImage={category.nameImage}
                    NameCategory={category.nameCategory}
                    TotalViewers={TotalViewer(category.totalViewers)}
                >
                    <div className="flex flex-row gap-2 line-clamp-1">
                    {category.tags.map(tag => (
                        <Tag key={tag} text={tag} />
                    ))}
                    </div>
                </CardCategory>
            );
        }

    }

	return (
		<>
			<section className="text-gray-100 flex flex-col gap-2.5 w-full overflow-hidden">
				<p className="text-lg font-semibold">
					<span className="text-sky-500">Categories</span> We think
					you'll like
				</p>
                <div className="flex flex-row gap-6 w-full flex-wrap">
                    { cards }
					
				</div>
				<div className="flex flex-row gap-6 items-center justify-center relative "></div>
			</section>
		</>
	);
}
