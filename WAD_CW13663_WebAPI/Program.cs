using Microsoft.EntityFrameworkCore;
using WAD_CW13663.Data;
using WAD_CW13663.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<NewspapersAppDbContext>(
    o => o.UseSqlServer(
        builder.Configuration.GetConnectionString("SqlServerConnection")));

builder.Services.AddScoped<INewspaperRepository, NewspaperRepository>();
builder.Services.AddScoped<IPublisherRepository, PublisherRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
