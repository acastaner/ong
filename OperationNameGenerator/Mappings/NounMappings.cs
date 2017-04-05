using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.ViewModels;

namespace OperationNameGenerator.Mappings
{
    public static class NounMappings
    {
        public static NounDto toNounDto(this Noun noun)
        {
            return new NounDto
            {
                Value = noun.Value
            };
        }
    }
}
