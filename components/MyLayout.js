import Header from './Header';

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

// ============ START of Method 2 - Page content as prop ============

const Layout = props => (
	<div style={layoutStyle}>
		<Header />
		{props.content}
	</div>
);

export default Layout;

// ============ END of Method 2 - Page content as prop ============



// =========== START of Method 1 - Layout as a Higher Order Component =========== 

// const withLayout = Page => {
// 	return () => (
// 		<div style={layoutStyle}>
// 			<Header />
// 			<Page />
// 		</div>
// 	)
// }
// export default withLayout;

// =========== END of Method 1 - Layout as a Higher Order Component =========== 




// ========= START of Layout =========

// const Layout = props => (
// 	<div style={layoutStyle}>
// 		<Header />
// 		{props.children}
// 	</div>
// );
// export default Layout;

// ========= END of Layout =========