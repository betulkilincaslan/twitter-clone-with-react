import { SearchInput } from '../component/searchInput';
import { TrendingList } from '../component/trendingList';

const SideRight = () => {
    return (
        <div className="rightSidebar col">
            <SearchInput />
            <TrendingList />
        </div>
    );
}

export default SideRight;
