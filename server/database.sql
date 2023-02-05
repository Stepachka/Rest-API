CREATE TABLE public.address (
	district varchar(20) NOT NULL,
	street varchar(20) NOT NULL,
	house int4 NOT NULL,
	apartment int4 NOT NULL,
	id SERIAL NOT NULL,
	CONSTRAINT address_pkey PRIMARY KEY (id)
);

CREATE TABLE public.customers (
	id SERIAL NOT NULL,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	phone_number varchar(15) NOT NULL,
	address_id int4 NOT NULL,
	CONSTRAINT customers_pkey PRIMARY KEY (id),
	CONSTRAINT customers_fk FOREIGN KEY (address_id) REFERENCES public.address(id)
);
CREATE TABLE public.products (
        id SERIAL NOT NULL,
        price float4 NOT NULL,
        menu varchar NOT NULL,
        CONSTRAINT products_pkey PRIMARY KEY (id)
);
CREATE TABLE public.status_order (
        id SERIAL NOT NULL,
        status_order varchar NOT NULL,
        CONSTRAINT status_order_pk PRIMARY KEY (id)
);
CREATE TABLE public.method_payment (
        id SERIAL NOT NULL,
        method_payment varchar NOT NULL,
        CONSTRAINT method_payment_pk PRIMARY KEY (id)
);
CREATE TABLE public.type_delivery (
        id SERIAL NOT NULL,
        type_delivery varchar NOT NULL,
        CONSTRAINT type_delivery_pk PRIMARY KEY (id)
);
CREATE TABLE public.courier_info (
        id SERIAL NOT NULL,
        first_name varchar(30) NOT NULL,
        last_name varchar(30) NOT NULL,
        phone_number varchar(11) NOT NULL,
        delivery_type int4 NOT NULL,
        CONSTRAINT courier_info_pkey PRIMARY KEY (id),
        CONSTRAINT courier_info_fk FOREIGN KEY (delivery_type) REFERENCES public.type_delivery(id)
);

CREATE TABLE public."order" (
        id SERIAL NOT NULL,
        status_order_id int4 NOT NULL,
        customer_id int4 NOT NULL,
        date_get varchar NOT NULL,
        CONSTRAINT orders_pk PRIMARY KEY (id),
        CONSTRAINT order_fk FOREIGN KEY (customer_id) REFERENCES public.courier_info(id),
        CONSTRAINT order_fk_1 FOREIGN KEY (status_order_id) REFERENCES public.status_order(id),
        CONSTRAINT order_fk_2 FOREIGN KEY (customer_id) REFERENCES public.customers(id)
);
CREATE TABLE public.orders_products (
        order_id SERIAL NOT NULL,
        product_id int4 NOT NULL,
        quantity int4 NOT NULL,
        CONSTRAINT orders_products_fk FOREIGN KEY (order_id) REFERENCES public."order"(id),
        CONSTRAINT orders_products_fk_1 FOREIGN KEY (product_id) REFERENCES public.products(id)
);
CREATE TABLE public.delivery_list (
        id SERIAL NOT NULL,
        payment_method int4 NOT NULL,
        delivery_status varchar(15) NOT NULL,
        courier_id int4 NOT NULL,
        order_id int4 NOT NULL,
        CONSTRAINT delivery_list_pk PRIMARY KEY (id),
        CONSTRAINT delivery_lis_fk FOREIGN KEY (payment_method) REFERENCES public.method_payment(id),
        CONSTRAINT delivery_list_fk FOREIGN KEY (courier_id) REFERENCES public.courier_info(id),
        CONSTRAINT delivery_list_fk_2 FOREIGN KEY (order_id) REFERENCES public."order"(id)
);