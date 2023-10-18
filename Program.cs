using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using PLAYSCRIBE_Backend.Data;
using PLAYSCRIBE_Backend.Models;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();
builder.Services.AddControllersWithViews();
//GAME DATABASE İŞLEMLERİ
builder.Services.AddDbContext<DataConnectionClass>(options =>
{
	options.UseSqlServer(builder.Configuration.GetConnectionString("ScoreConnection"));
});
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
//BLOK YORUM DATABASE İŞLEMLERİ
builder.Services.AddDbContext<DataBlokClass>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("BlokConnection"));
});

builder.Services.AddScoped<IBlokOfWork, BlokOfWork>();


var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=HomeMain}/{id?}",
	defaults: new { controller = "Home" });

//ROTUE YAPILANDIRMASI
//ANA SAYFA ROUTE
app.MapControllerRoute(
           name: "blog",
           pattern: "blog/{action=BlogMain}/{id?}",
           defaults: new { controller = "Blog" });
app.MapControllerRoute(
    name: "Game",
    pattern: "Game/{action=GameMain}/{id?}",
    defaults: new { controller = "Game" });
app.MapControllerRoute(
    name: "About",
    pattern: "about/{action=AboutMain}/{id?}",
    defaults: new { controller = "About" });
//app.MapControllerRoute(
//	name: "identity",
//	pattern: "Identity/{controller=Account}/{action=Register}/{id?}");

app.MapRazorPages();


//var BlokBuilder = WebApplication.CreateBuilder(args);

// ConfigureServices metodu i�inde servisleri yap�land�r�n

// Di�er servisleri burada kaydedebilirsiniz.
//var Scoreapp = BlokBuilder.Build();


// �rne�in, app.UseRouting(), app.UseEndpoints(), ve app.Map() gibi ayarlar� burada ekleyebilirsiniz.
//Scoreapp.Run();

app.Run();