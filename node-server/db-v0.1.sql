-- public."plans" definition

-- Drop table

-- DROP TABLE public."plans";

CREATE TABLE public."plans" (
	id serial4 NOT NULL,
	"name" varchar(15) NOT NULL,
	description varchar(50) NULL,
	price numeric(10, 2) NOT NULL,
	duration int4 NOT NULL,
	CONSTRAINT plans_pkey PRIMARY KEY (id)
);
CREATE INDEX ix_plans_id ON public.plans USING btree (id);


-- public.roles definition

-- Drop table

-- DROP TABLE public.roles;

CREATE TABLE public.roles (
	id serial4 NOT NULL,
	"name" varchar(40) NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	CONSTRAINT roles_name_key UNIQUE (name),
	CONSTRAINT roles_pkey PRIMARY KEY (id)
);
CREATE INDEX ix_roles_id ON public.roles USING btree (id);


-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id serial4 NOT NULL,
	email varchar(60) NULL,
	"password" varchar(80) NULL,
	role_id int4 NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id)
);
CREATE INDEX ix_users_id ON public.users USING btree (id);


-- public.audit_logs definition

-- Drop table

-- DROP TABLE public.audit_logs;

CREATE TABLE public.audit_logs (
	id serial4 NOT NULL,
	user_id int4 NOT NULL,
	"action" varchar(255) NOT NULL,
	"timestamp" timestamp NULL,
	CONSTRAINT audit_logs_pkey PRIMARY KEY (id),
	CONSTRAINT audit_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE INDEX ix_audit_logs_id ON public.audit_logs USING btree (id);


-- public.notifications definition

-- Drop table

-- DROP TABLE public.notifications;

CREATE TABLE public.notifications (
	id serial4 NOT NULL,
	user_id int4 NULL,
	message varchar(255) NOT NULL,
	sent_at timestamp NULL,
	CONSTRAINT notifications_pkey PRIMARY KEY (id),
	CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE INDEX ix_notifications_id ON public.notifications USING btree (id);


-- public.subscriptions definition

-- Drop table

-- DROP TABLE public.subscriptions;

CREATE TABLE public.subscriptions (
	id serial4 NOT NULL,
	user_id int4 NULL,
	plan_id int4 NULL,
	status varchar(50) NOT NULL,
	start_date timestamp NULL,
	end_date timestamp NULL,
	CONSTRAINT subscriptions_pkey PRIMARY KEY (id),
	CONSTRAINT subscriptions_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public."plans"(id),
	CONSTRAINT subscriptions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE INDEX ix_subscriptions_id ON public.subscriptions USING btree (id);


-- public.invoices definition

-- Drop table

-- DROP TABLE public.invoices;

CREATE TABLE public.invoices (
	id serial4 NOT NULL,
	user_id int4 NULL,
	subscription_id int4 NULL,
	price numeric(10, 2) NOT NULL,
	status varchar(50) NOT NULL,
	issue_date timestamp NULL,
	due_date timestamp NULL,
	CONSTRAINT invoices_pkey PRIMARY KEY (id),
	CONSTRAINT invoices_subscription_id_fkey FOREIGN KEY (subscription_id) REFERENCES public.subscriptions(id),
	CONSTRAINT invoices_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE INDEX ix_invoices_id ON public.invoices USING btree (id);


-- public.payments definition

-- Drop table

-- DROP TABLE public.payments;

CREATE TABLE public.payments (
	id serial4 NOT NULL,
	invoice_id int4 NULL,
	amount numeric(10, 2) NOT NULL,
	payment_method varchar(50) NULL,
	payment_date timestamp NULL,
	CONSTRAINT payments_pkey PRIMARY KEY (id),
	CONSTRAINT payments_invoice_id_fkey FOREIGN KEY (invoice_id) REFERENCES public.invoices(id)
);
CREATE INDEX ix_payments_id ON public.payments USING btree (id);