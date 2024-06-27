# Backend Design

## Database tables;

-   Users
-   Roles
-   Notifications
-   Audit logs
-   Subscriptions
-   Plans
-   Invoices
-   Payments

### Users process steps

Kullanıcı hesap oluşturup ve bir üyelik aldığında, genellikle şu adımlar izlenir:

1. Kullanıcı Hesabı Oluşturma:
   Kullanıcı yeni bir hesap oluşturur ve kayıt işlemi gerçekleştirilir.
   Bu adımda User modeli kullanılır.

2. Abonelik Planının Seçilmesi:
   Kullanıcı bir abonelik planı seçer.
   Seçilen plana ait detaylar Plan modeli kullanılarak alınır.

3. Ödeme İşlemi:
   Kullanıcı seçilen plan için bir ödeme gerçekleştirir.
   Ödeme detayları Invoice ve Payment modelleri kullanılarak kaydedilir.

4. Abonelik Oluşturma:
   Kullanıcının seçtiği plana ait bir abonelik oluşturulur.
   Bu adımda Subscription modeli kullanılır.

5. Denetim Günlüğü Kaydı:
   Tüm bu işlemler sırasında kullanıcı hareketleri denetim günlüğüne kaydedilir.
   Bu adımda AuditLog modeli kullanılabilir.

## Modules

1. Kişiler
2. Firmalar(Satış fırsatı firma sub modülü)
3. Raporlar

### Sales;
- account + contact management
- activity management
- opportunity management