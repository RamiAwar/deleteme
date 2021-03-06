import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.1f66120c.js';

var successkid = "/client/465898c830bb9d2c.jpg";

/* src/routes/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t4;
	let t5;
	let p;
	let strong;
	let t6;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Under Construction");
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			t4 = text("Have fun with Sapper!");
			t5 = space();
			p = element("p");
			strong = element("strong");
			t6 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1r9b0br\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Under Construction");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			figure = claim_element(nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true });
			t3 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			t4 = claim_text(figcaption_nodes, "Have fun with Sapper!");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			strong = claim_element(p_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t6 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Rami Awar";
			attr_dev(h1, "class", "svelte-1azyk8h");
			add_location(h1, file, 8, 0, 127);
			attr_dev(img, "alt", "Success Kid");
			if (img.src !== (img_src_value = successkid)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1azyk8h");
			add_location(img, file, 11, 2, 167);
			add_location(figcaption, file, 12, 2, 212);
			attr_dev(figure, "class", "svelte-1azyk8h");
			add_location(figure, file, 10, 0, 156);
			add_location(strong, file, 16, 2, 276);
			attr_dev(p, "class", "svelte-1azyk8h");
			add_location(p, file, 15, 0, 270);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, figure, anchor);
			append_dev(figure, img);
			append_dev(figure, t3);
			append_dev(figure, figcaption);
			append_dev(figcaption, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, strong);
			append_dev(strong, t6);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ successkid });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTMxNWEzYjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL3N1Y2Nlc3NraWQuanBnIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIvY2xpZW50LzQ2NTg5OGM4MzBiYjlkMmMuanBnXCIiLCI8c2NyaXB0PlxuICBpbXBvcnQgc3VjY2Vzc2tpZCBmcm9tIFwiaW1hZ2VzL3N1Y2Nlc3NraWQuanBnXCI7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+UmFtaSBBd2FyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5VbmRlciBDb25zdHJ1Y3Rpb248L2gxPlxuXG48ZmlndXJlPlxuICA8aW1nIGFsdD1cIlN1Y2Nlc3MgS2lkXCIgc3JjPXtzdWNjZXNza2lkfSAvPlxuICA8ZmlnY2FwdGlvbj5IYXZlIGZ1biB3aXRoIFNhcHBlciE8L2ZpZ2NhcHRpb24+XG48L2ZpZ3VyZT5cblxuPHA+XG4gIDxzdHJvbmdcbiAgICA+VHJ5IGVkaXRpbmcgdGhpcyBmaWxlIChzcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSkgdG8gdGVzdCBsaXZlIHJlbG9hZGluZy48L3N0cm9uZz5cbjwvcD5cblxuPHN0eWxlPlxuICBoMSxcbiAgZmlndXJlLFxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgfVxuXG4gIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQ1dlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
